import React, { useContext, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonList,
  IonListHeader,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
} from '@ionic/react';

// Components
import { globalContext } from '../store/Store';
import DailyVerse from '../components/DailyVerse';
import ExploreCard from '../components/ExploreCard';
import StudyPlanCard from '../components/StudyPlanCard';

// Utils
import { getAsVerseArray } from '../utils/Data';

// Types
import Verse from '../types/Verse';

// Styles
import './HomePage.css';

// Test data
import data from '../test/learnData.test.json';
const testData = getAsVerseArray(data);

const currentUser = {
  id: '0wy4913ofh01',
  name: 'Nick',
  progress: 0.25,
};

let psuedoVerse: Verse = {
  reference: 'Genesis 1:1',
  content: 'In the beginning',
};

const exploreStyles = {
  width: '100vw',
};

const HomePage: React.FC = () => {
  const { globalState, dispatch } = useContext(globalContext);

  useEffect(() => {
    dispatch({ type: 'SET_VERSES', payload: testData });
    return () => {
      // do nothing
    };
  }, [dispatch]);

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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Good Morning, {currentUser.name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList className="for-you-container">
          {/* Render user-specific content */}
          <IonListHeader>For You</IonListHeader>

          {/* Display the verse of the day */}
          <DailyVerse verse={psuedoVerse} />
          {globalState.dailyVerses !== [] && (
            <StudyPlanCard verses={getAsVerseArray(globalState.dailyVerses)} />
          )}
        </IonList>

        <IonList className="explore-container" style={exploreStyles}>
          {/* Render the explore cards */}
          <IonListHeader>Explore</IonListHeader>
          <ExploreCard
            title="Coming soon"
            subtitle="Explore"
            content="Keep checking back for more..."
          />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
