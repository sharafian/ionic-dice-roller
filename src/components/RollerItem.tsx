import {
  IonNote,
  IonLabel,
  IonItem,
  IonAlert
} from '@ionic/react'
import { Roller } from '../state/rollers'
import React, { useState } from 'react'

const sign = (n: number) => {
  return n < 0 ? '' : '+'
}

export interface Roll {
  dice: number[]
  sum: number
}

const RollerItem: React.FC<{roller: Roller}> = ({ roller }) => {
  const [ roll, setRoll ] = useState(null as Roll | null)

  const onClick = () => {
    const dice = []
    let sum = roller.bonus

    for (let i = 0; i < roller.count; ++i) {
      const die = Math.floor(Math.random() * roller.sides) + 1
      dice.push(die)
      sum += die
    }

    setRoll({ dice, sum })
  }

  return <>
    <IonAlert
      isOpen={Boolean(roll)}
      onDidDismiss={() => setRoll(null)}
      header={roller.name}
      subHeader={`rolled ${roll && roll!.sum} on ${roller.name}`}
      message={`${roll && roll!.dice.join(' + ')}, bonus ${sign(roller.bonus)}${roller.bonus}`}
      buttons={['OK']}
    />
    <IonItem onClick={onClick}>
      <IonLabel>
        <h1>{roller.name}</h1>
        <IonNote>{roller.count}d{roller.sides}{sign(roller.bonus)}{roller.bonus}</IonNote>
      </IonLabel>
    </IonItem>
  </>
}

export default RollerItem
