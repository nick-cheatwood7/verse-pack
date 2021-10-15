import React from 'react'
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonChip,
  IonLabel,
  IonButton,
} from '@ionic/react'
import { analyticsOutline } from 'ionicons/icons'

import './StudyPlanCard.css'

interface ContainerProps {
  verses: Array<Verse>
}

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

const StudyPlanCard: React.FC<ContainerProps> = ({ verses }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle className='subtitle'>
          <IonIcon icon={analyticsOutline} size='small' className='icon' />
          Study Plan
        </IonCardSubtitle>
        <IonCardTitle>Today's Review</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className='content'>
        <p>{renderVerseTags(verses)}</p>
      </IonCardContent>
      <div className='actionButton'>
        <IonButton expand='block'>Begin</IonButton>
      </div>
    </IonCard>
  )
}

export default StudyPlanCard
