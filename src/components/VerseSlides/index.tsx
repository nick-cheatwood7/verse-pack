import { IonContent, IonSlide, IonSlides } from '@ionic/react'
import React from 'react'
import './VerseSlides.css'

import Verse from '../../types/Verse'
import VersePreviewCard from '../VerseCard'

interface ContainerProps {
  verses: Array<Verse>
}

const slideOpts = {
  initialSlide: 1,
  speed: 400,
}

// TODO:
// 1. Render progress bar
// 2. Size cards appropriately
// 3. Handle taps, swipes
// 4. Increment progress

const renderVerseSlides = (verses) => {
  return verses.map((verse) => {
    return (
      <IonSlide>
        <VersePreviewCard verse={verse} />
      </IonSlide>
    )
  })
}

const VerseSlides: React.FC<ContainerProps> = ({ verses }) => {
  return (
    <IonContent>
      <IonSlides pager options={slideOpts}>
        {/* Render each individual verse slide */}
        {renderVerseSlides(verses)}
      </IonSlides>
    </IonContent>
  )
}

export default VerseSlides
