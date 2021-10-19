import React, { useContext, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './LearnPage.css';

import data from '../test/learnData.test.json';
import StudyPlanCard from '../components/StudyPlanCard';
import PackCard from '../components/PackCard';
import { flashOutline, heartOutline } from 'ionicons/icons';

import { globalContext } from '../store/Store';
import { getAsVerseArray } from '../utils/Data';

const LearnPage: React.FC = () => {
  const { globalState, dispatch } = useContext(globalContext);

  useEffect(() => {
    dispatch({ type: 'SET_VERSES', payload: data });
    return () => {
      // cleanup
    };
  }, [dispatch]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Learn</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Learn</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <StudyPlanCard verses={getAsVerseArray(globalState.dailyVerses)} />
          <IonListHeader>Your Packs</IonListHeader>
          {/* Render User Packs here */}
          <PackCard icon={heartOutline} title="Favorites" />
          <PackCard icon={flashOutline} title="Recently Seen" />
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LearnPage;
