import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from '@ionic/react'

import { compassOutline } from 'ionicons/icons'

interface ContainerProps {
  imageUrl?: string
  subtitle?: JSX.Element | string
  title: string
  content: JSX.Element | string
  customIcon?: string
}

const ExploreCard: React.FC<ContainerProps> = ({
  imageUrl,
  subtitle,
  title,
  content,
  customIcon,
}) => {
  return (
    <IonCard>
      {imageUrl && <img alt='card' src={imageUrl} />}
      <IonCardHeader>
        <IonCardSubtitle style={{ display: 'flex', alignItems: 'center' }}>
          <IonIcon
            icon={customIcon ? customIcon : compassOutline}
            style={{ paddingRight: '6px' }}
            size='small'
          />
          {subtitle}
        </IonCardSubtitle>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{content}</IonCardContent>
    </IonCard>
  )
}

export default ExploreCard
