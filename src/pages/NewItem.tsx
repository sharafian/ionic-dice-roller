import {
  IonBackButton,
  IonButtons,
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  NavContext
} from '@ionic/react'
import { RouteComponentProps } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import {
  RollersContext,
  RollersActionType
} from '../state/rollers'

const NewItem: React.FC<RouteComponentProps> = props => {
  const [, dispatch ] = useContext(RollersContext)
  const navContext = useContext(NavContext)

  const [ count, setCount ] = useState('1')
  const [ sides, setSides ] = useState('20')
  const [ bonus, setBonus ] = useState('0')
  const [ name, setName ] = useState('')

  const createRoller = (e: React.MouseEvent) => {
    e.preventDefault()

    dispatch({
      type: RollersActionType.ADD_ROLLER,
      roller: {
        count: Number(count),
        sides: Number(sides),
        bonus: Number(bonus),
        name
      }
    })

    navContext.goBack()
  }

  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonBackButton defaultHref='/home' />
        </IonButtons>
        <IonTitle>New Roller</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonItem key='name'>
        <IonLabel position='stacked'>Name</IonLabel>
        <IonInput
          value={name}
          onIonChange={(ev: any) => {
            setName(ev.target.value)
          }}
        />
      </IonItem>

      <IonItem key='count'>
        <IonLabel position='stacked'>Number of dice</IonLabel>
        <IonInput
          type='number'
          value={count}
          onFocus={() => setCount('')}
          onBlur={() => count || setCount('1')}
          onIonChange={(ev: any) => {
            setCount(ev.target.value)
          }}
        />
      </IonItem>

      <IonItem key='sides'>
        <IonLabel position='stacked'>Number of sides</IonLabel>
        <IonInput
          type='number'
          value={sides}
          onFocus={() => setSides('')}
          onBlur={() => sides || setSides('20')}
          onIonChange={(ev: any) => {
            setSides(ev.target.value)
          }}
        />
      </IonItem>

      <IonItem key='bonus'>
        <IonLabel position='stacked'>Bonus</IonLabel>
        <IonInput
          type='number'
          value={bonus}
          onFocus={() => setBonus('')}
          onBlur={() => bonus || setBonus('0')}
          onIonChange={(ev: any) => {
            setBonus(ev.target.value)
          }}
        />
      </IonItem>

      <div style={{ margin: '1em' }}>
        <IonButton onClick={createRoller}>Create Roller</IonButton>
      </div>
    </IonContent>
  </IonPage>
}

export default NewItem
