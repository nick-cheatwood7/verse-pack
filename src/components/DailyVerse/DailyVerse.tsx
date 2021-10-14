import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
} from '@ionic/react'
import { sunnyOutline } from 'ionicons/icons'

interface ContainerProps {
  reference: string
  content: string
}

const DailyVerse: React.FC<ContainerProps> = ({ reference, content }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle>
          <IonIcon icon={sunnyOutline} style={{ paddingRight: '6px' }} />
          Verse of the Day
        </IonCardSubtitle>
        <IonCardTitle>{reference}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{content}</IonCardContent>
    </IonCard>
  )
}

export default DailyVerse
