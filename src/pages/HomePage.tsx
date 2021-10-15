import React from 'react'
import {
  IonContent,
  IonPage,
  IonList,
  IonListHeader,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
} from '@ionic/react'

import ExploreCard from '../components/ExploreCard'
import ProgressCard from '../components/ProgressCard'
import './HomePage.css'
import DailyVerse from '../components/DailyVerse'
import Verse from '../types/Verse'

const currentUser = {
  id: '0wy4913ofh01',
  name: 'Nick',
  progress: 0.25,
}

let psuedoVerse: Verse = {
  reference: 'Genesis 1:1',
  content: 'In the beginning',
}

const exploreStyles = {
  width: '100vw',
}

const HomePage: React.FC = () => {
  return (
    <IonPage>
      {/* Render the header */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>VersePack</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Render the header */}
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Good Morning, {currentUser.name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList className='for-you-container'>
          {/* Render user-specific content */}
          <IonListHeader>For You</IonListHeader>

          {/* Display the verse of the day */}
          <DailyVerse verse={psuedoVerse} />

          {/* Render the user's weekly progress */}
          <ProgressCard progress={currentUser.progress} />
        </IonList>

        <IonList className='explore-container' style={exploreStyles}>
          {/* Render the explore cards */}
          <IonListHeader>Explore</IonListHeader>
          <ExploreCard
            imageUrl='https://images.unsplash.com/photo-1547093349-65cdba98369a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
            title='Jump back in'
            subtitle='Explore'
            content='Lorem Ipsum'
          />
          <ExploreCard
            imageUrl='https://images.unsplash.com/photo-1437603568260-1950d3ca6eab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80'
            title='How to Pray'
            subtitle='Explore'
            content="Prayer doesn't have to be difficult"
          />
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default HomePage
