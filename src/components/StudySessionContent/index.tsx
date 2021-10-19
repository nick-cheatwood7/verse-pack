import React, { useState, useContext, useEffect } from 'react';
import { IonButton, IonGrid, IonRow, IonIcon } from '@ionic/react';

// Import icons
import { checkmarkOutline, closeOutline, repeatOutline } from 'ionicons/icons';

// Import components
import Notecard from '../../components/Notecard';
import { globalContext } from '../../store/Store';

// Import Types
import { StudyItem } from '../../types';

// Import styles
import './styles.css';

// Import test data
import data from '../../test/learnData.test.json';

const StudySessionContent: React.FC = () => {
  const [currentItem, setCurrentItem] = useState({} as StudyItem);
  const [showContents, setShowContents] = useState(false);
  const [prompt, setPrompt] = useState('Tap to reveal');

  // Tap into global store
  const { globalState } = useContext(globalContext);

  // Lifecycle methods
  useEffect(() => {
    // Load in the first study item on component mount
    // setCurrentItem(globalState.study?.items[0]);
    setCurrentItem(loadTestData(data)[1]);
  }, [currentItem.verse]);

  const renderContent = (item: StudyItem) => {
    return (
      <IonGrid className="container">
        <IonRow className="row">
          <a role="button" onClick={handleClick}>
            {/* Notecard card goes here*/}
            {!showContents ? (
              <Notecard title={item.verse.reference} />
            ) : (
              <Notecard
                title={item.verse.reference}
                content={item.verse.content}
              />
            )}
          </a>
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
            onClick={handleMiss}
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
            onClick={handleRepeat}
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
            onClick={handleSuccess}
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

  function handleRepeat() {
    alert('repeat!');
  }

  function handleMiss() {
    alert('missed!');
  }

  function handleSuccess() {
    alert('you got it!');
  }

  function loadTestData(data: any) {
    let array: Array<StudyItem>;
    array = data.map((verse: any) => {
      return { verse: verse, correct: false };
    });
    return array;
  }

  function loadNextItem() {}

  const handleClick = () => {
    setShowContents(!showContents);
    const promptText = showContents ? 'Tap to reveal' : "How'd you do?";
    setPrompt(promptText);
  };

  return (
    <div className="container">
      {currentItem.verse && renderContent(currentItem)}
    </div>
  );
};

export default StudySessionContent;
