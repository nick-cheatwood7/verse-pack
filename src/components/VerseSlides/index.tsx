import { IonContent, IonSlide, IonSlides } from '@ionic/react'
import React from 'react'

interface ContainerProps {
  verses: Array<Object>
}

const slideOpts = {
  initialSlide: 1,
  speed: 400,
}

const VerseSlides: React.FC<ContainerProps> = ({ verses }) => {
  return (
    <IonContent>
      <IonSlides pager options={slideOpts}>
        <IonSlide>
          <h1>Slide 1</h1>
        </IonSlide>
      </IonSlides>
    </IonContent>
  )
}

export default VerseSlides
