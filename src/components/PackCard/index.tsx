import { IonCard, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react';
import React from 'react';

import './PackCard.css';

interface ComponentProps {
  icon: string;
  title: string;
}

const PackCard: React.FC<ComponentProps> = ({ icon, title }) => {
  return (
    <IonCard className="pack-card">
      <div className="pack-card-content">
        <IonIcon icon={icon} size="large" className="icon" />
        <IonCardTitle className="title">{title}</IonCardTitle>
      </div>
    </IonCard>
  );
};

export default PackCard;
