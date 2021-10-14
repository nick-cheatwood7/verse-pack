import {
  IonButton,
  IonChip,
  IonContent,
  IonHeader,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './LearnPage.css'

import data from '../test/learnData.test.json'
import VerseSlides from '../components/VerseSlides'

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
        <IonItemGroup>
          <IonItem>
            <IonTitle>Today's Review</IonTitle>
          </IonItem>
          <IonItem>{renderVerseTags(data)}</IonItem>
          <IonButton>Start Review</IonButton>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  )
}

export default LearnPage
