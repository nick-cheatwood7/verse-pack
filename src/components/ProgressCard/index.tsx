import React from 'react'
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonProgressBar,
  IonText,
} from '@ionic/react'
import { analyticsOutline } from 'ionicons/icons'

interface ContainerProps {
  progress: number
}

const ProgressCard: React.FC<ContainerProps> = ({ progress }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle style={{ display: 'flex', alignItems: 'center' }}>
          <IonIcon
            icon={analyticsOutline}
            style={{ paddingRight: '6px' }}
            size='small'
          />
          Study Plan
        </IonCardSubtitle>
        <IonCardTitle>Weekly Progress</IonCardTitle>
      </IonCardHeader>
      <IonCardContent style={{ display: 'flex', alignItems: 'center' }}>
        <IonProgressBar value={progress} />
        <IonText style={{ paddingLeft: '20px' }}>
          {progress * 100 + '%'}
        </IonText>
      </IonCardContent>
    </IonCard>
  )
}

export default ProgressCard
