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

import StudyPlanCard from '../components/StudyPlanCard';

import { globalContext } from '../store/Store';
import { getAsVerseArray } from '../utils/Data';

const LearnPage: React.FC = () => {
  const { globalState } = useContext(globalContext);

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
          <div className="study-container">
            <StudyPlanCard verses={getAsVerseArray(globalState.dailyVerses)} />
          </div>
          {/* <IonListHeader>Your Packs</IonListHeader>
          <div className="packs-container">
            <PackCard icon={heartOutline} title="Favorites" />
            <PackCard icon={flashOutline} title="Recently Seen" />
          </div> */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LearnPage;
