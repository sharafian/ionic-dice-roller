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
import RollerList from '../components/RollerList'

const Home: React.FC<RouteComponentProps> = (props) => {
  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Ionic Blank</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className='ion-padding'>
      <RollerList />

      <IonFab vertical='bottom' horizontal='end' slot='fixed'>
        <IonFabButton onClick={() => props.history.push('/new')}>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </IonContent>
  </IonPage>
}

export default Home
