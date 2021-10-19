import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useContext, useEffect } from 'react';

import './styles.css';

// Import Components
import StudySessionContent from '../../components/StudySessionContent';
import { globalContext } from '../../store/Store';

const StudyPage: React.FC = () => {
  // Tap into global store
  const { globalState, dispatch } = useContext(globalContext);

  useEffect(() => {
    // on mount
    dispatch({ type: 'SET_FOCUS', payload: false });

    // on component unmount
    return () => {
      dispatch({ type: 'SET_FOCUS', payload: false });
    };
  }, [dispatch]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Study</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Study</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Render out the study card */}
        <StudySessionContent />
      </IonContent>
    </IonPage>
  );
};

export default StudyPage;
