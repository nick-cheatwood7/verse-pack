import {
  IonButton,
  IonChip,
  IonContent,
  IonHeader,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './LearnPage.css'

import data from '../test/learnData.test.json'
import VerseSlides from '../components/VerseSlides'
import StudyPlanCard from '../components/StudyPlanCard'

interface Verse {
  reference: string
  content: string
}

const renderVerseTags = (verses: Array<Verse>) => {
  return verses.map((v) => {
    return (
      <IonChip>
        <IonLabel>{v.reference}</IonLabel>
      </IonChip>
    )
  })
}

const LearnPage: React.FC = () => {
  console.log(JSON.stringify(data))
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
        <IonList>
          <StudyPlanCard verses={data} />
          <IonListHeader>Your Packs</IonListHeader>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default LearnPage
