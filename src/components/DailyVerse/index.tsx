import React from 'react'
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
} from '@ionic/react'
import { sunnyOutline } from 'ionicons/icons'

import Verse from '../../types/Verse'

interface ContainerProps {
  verse: Verse
}

const DailyVerse: React.FC<ContainerProps> = ({ verse }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle style={{ display: 'flex', alignItems: 'center' }}>
          <IonIcon
            icon={sunnyOutline}
            style={{ paddingRight: '6px' }}
            size='small'
          />
          Verse of the Day
        </IonCardSubtitle>
        <IonCardTitle>{verse.reference}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{verse.content}</IonCardContent>
    </IonCard>
  )
}

export default DailyVerse
