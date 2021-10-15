import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'

// Import Types
import Verse from '../../types/Verse'

// Import Components
import VerseSlides from '../../components/VerseSlides'

// Import test data
import data from '../../test/learnData.test.json'

const verseArray: Array<Verse> = [...data]

const StudyPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Study</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Study</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Render out the verse slides */}
        <VerseSlides verses={verseArray} />
      </IonContent>
    </IonPage>
  )
}

export default StudyPage
