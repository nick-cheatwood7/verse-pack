import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonIcon,
  IonChip,
  IonLabel,
  IonButton,
} from '@ionic/react';
import { analyticsOutline, shuffleOutline } from 'ionicons/icons';

import './StudyPlanCard.css';
import Verse from '../../types/Verse';

interface ContainerProps {
  verses: Array<Verse>;
}

const renderVerseTags = (verses: Array<Verse>) => {
  return verses.map((v) => {
    return (
      <IonChip>
        <IonLabel>{v.reference}</IonLabel>
      </IonChip>
    );
  });
};

const StudyPlanCard: React.FC<ContainerProps> = ({ verses }) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardSubtitle className="subtitle">
          <IonIcon icon={analyticsOutline} size="small" className="icon" />
          Study Plan
        </IonCardSubtitle>
        <IonCardTitle>Today's Review</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="content">
        <p>{renderVerseTags(verses)}</p>
      </IonCardContent>

      <IonButton expand="block" className="begin-button" href="/learn/study">
        Begin
        <IonIcon icon={shuffleOutline} className="icon" />
      </IonButton>
    </IonCard>
  );
};

export default StudyPlanCard;
