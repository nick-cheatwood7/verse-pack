import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react'
import React, { useState } from 'react'
import Verse from '../../types/Verse'

import './VerseCard.css'

interface ComponentProps {
  verse: Verse
}

const VerseCard: React.FC<ComponentProps> = ({ verse }) => {
  const [showContents, setShowContents] = useState(false)

  const renderCard = (verse) => {
    if (!showContents) {
      return (
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{verse.reference}</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      )
    } else {
      return (
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>{verse.reference}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>{verse.content}</IonCardContent>
        </IonCard>
      )
    }
  }

  const handleClick = () => {
    setShowContents(!showContents)
  }

  return (
    <div className='container'>
      <a role='button' onClick={handleClick}>
        {renderCard(verse)}
      </a>
    </div>
  )
}

export default VerseCard
