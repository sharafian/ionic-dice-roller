import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonBadge,
  IonNote,
  IonLabel,
  IonCheckbox,
  IonContent,
  IonList,
  IonItem,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import { RouteComponentProps } from 'react-router-dom'
import { add } from 'ionicons/icons'
import React from 'react'

const Home: React.FC<RouteComponentProps> = (props) => {
  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Ionic Blank</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className='ion-padding'>
      <IonList>
        <IonItem>
          <IonCheckbox slot='start' />
          <IonLabel>
            <h1>Create a roll</h1>
            <IonNote>This is an action or something</IonNote>
          </IonLabel>
          <IonBadge color='success' slot='end'>
            5 days
          </IonBadge>
        </IonItem>
      </IonList>

      <IonFab vertical='bottom' horizontal='end' slot='fixed'>
        <IonFabButton onClick={() => props.history.push('/new')}>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </IonContent>
  </IonPage>
}

export default Home
