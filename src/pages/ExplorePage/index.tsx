import React from 'react'

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
} from '@ionic/react'

const ExplorePage: React.FC = () => {
  return (
    <IonPage>
      {/* Render the header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>VersePack</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Render the content header */}
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Search</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Render the content */}
        <IonList className='explore-container'>{/* Explore tab */}</IonList>
      </IonContent>
    </IonPage>
  )
}

export default ExplorePage
