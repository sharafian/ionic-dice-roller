import {
  IonBadge,
  IonNote,
  IonLabel,
  IonCheckbox,
  IonList,
  IonItem,
} from '@ionic/react'

import {
  RollersContext,
  Roller
} from '../state/rollers'

import React, { useContext } from 'react'

const sign = (n: number) => {
  return n < 0 ? '-' : '+'
}

const RollerList: React.FC = () => {
  const [ { rollers } ] = useContext(RollersContext)

  const items = rollers.map((roller: Roller) => {
    return <IonItem>
      <IonCheckbox slot='start' />
      <IonLabel>
        <h1>{roller.name}</h1>
        <IonNote>{roller.count}d{roller.sides}{sign(roller.bonus)}{roller.bonus}</IonNote>
      </IonLabel>
    </IonItem>
  })

  return <IonList>
    { items }
  </IonList>
}

export default RollerList
