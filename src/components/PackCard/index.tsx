import { IonCard, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react'
import { chevronForwardOutline } from 'ionicons/icons'
import React from 'react'

import './PackCard.css'

interface ComponentProps {
  icon: string
  title: string
}

const PackCard: React.FC<ComponentProps> = ({ icon, title }) => {
  return (
    <IonCard className='card'>
      <div className='content'>
        <IonIcon icon={icon} size='large' className='icon' />
        <IonCardTitle className='title'>{title}</IonCardTitle>
        {/* <IonIcon
          icon={chevronForwardOutline}
          size='small'
          className='chevron'
        /> */}
      </div>
    </IonCard>
  )
}

export default PackCard
