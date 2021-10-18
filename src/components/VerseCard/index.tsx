import {
  IonButton,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSkeletonText,
  IonIcon,
  IonItem,
} from '@ionic/react';
import React, { useState } from 'react';
import Verse from '../../types/Verse';

// Import icons
import { checkmarkOutline, closeOutline, repeatOutline } from 'ionicons/icons';

// Import styles
import './VerseCard.css';
import Notecard from '../Notecard';

interface ComponentProps {
  verse: Verse;
}

const VerseCard: React.FC<ComponentProps> = ({ verse }) => {
  const [showContents, setShowContents] = useState(false);
  const [prompt, setPrompt] = useState('Tap to reveal');

  const renderCard = (verse) => {
    return (
      <IonGrid className="container">
        <IonRow>
          {/* Verse card goes here*/}
          {!showContents ? (
            <Notecard title={verse.reference} />
          ) : (
            <Notecard title={verse.reference} content={verse.content} />
          )}
        </IonRow>
        <IonRow className="prompt">
          {/* Prompt goes here */}
          <p>{prompt}</p>
        </IonRow>
        <IonRow className="button-group">
          {/* Action buttons go here */}
          <IonButton
            color="danger"
            shape="round"
            size="large"
            className="action-button"
            fill="outline"
            hidden={!showContents}
          >
            <IonIcon icon={closeOutline} size="large" className="button-icon" />
          </IonButton>
          <IonButton
            color="warning"
            shape="round"
            size="large"
            className="action-button"
            fill="outline"
            hidden={!showContents}
            onClick={() => handleButtonPress('repeat')}
          >
            <IonIcon
              icon={repeatOutline}
              size="large"
              className="button-icon"
            />
          </IonButton>
          <IonButton
            color="success"
            shape="round"
            size="large"
            className="action-button"
            fill="outline"
            hidden={!showContents}
          >
            <IonIcon
              icon={checkmarkOutline}
              size="large"
              className="button-icon"
            />
          </IonButton>
        </IonRow>
      </IonGrid>
    );
  };

  const handleButtonPress = (action: string) => {
    alert(action);
    if (action === 'repeat') {
      setShowContents(false);
    }
  };

  const handleClick = () => {
    setShowContents(!showContents);
    const promptText = showContents ? 'Tap to reveal' : "How'd you do?";
    setPrompt(promptText);
  };

  return (
    <div className="container">
      <a role="button" onClick={handleClick}>
        {renderCard(verse)}
      </a>
    </div>
  );
};

export default VerseCard;
