import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer/ExploreContainer'
import './LearnPage.css'

const LearnPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Learn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Learn</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name='Learn page' />
      </IonContent>
    </IonPage>
  )
}

export default LearnPage
