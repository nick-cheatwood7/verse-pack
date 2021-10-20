import React, { useState, useContext, useEffect } from 'react';
import { IonButton, IonGrid, IonRow, IonIcon } from '@ionic/react';

// Import icons
import { checkmarkOutline, closeOutline, repeatOutline } from 'ionicons/icons';

// Import components
import Notecard from '../../components/Notecard';
import { globalContext } from '../../store/Store';

// Import Types
import { Verse } from '../../types';

// Import styles
import './styles.css';

// Import test data
import data from '../../test/learnData.test.json';

const StudySessionContent: React.FC = () => {
  const [currentItem, setCurrentItem] = useState({} as Verse);
  const [correct, setCorrect] = useState([] as Array<Verse>);
  const [showContents, setShowContents] = useState(false);
  const [prompt, setPrompt] = useState('Tap to reveal');

  // Tap into global store
  const { globalState, dispatch } = useContext(globalContext);

  // Lifecycle methods
  useEffect(() => {
    // Load in the first study item on component mount
    // setCurrentItem(globalState.study?.items[0]);
    setCurrentItem(loadTestData(data)[0]);
    console.log('View loaded');
  }, []);

  const renderContent = (item: Verse) => {
    return (
      <IonGrid className="container">
        <IonRow className="row">
          <a role="button" onClick={handleClick}>
            {/* Notecard card goes here*/}
            {!showContents ? (
              <Notecard title={item.reference} />
            ) : (
              <Notecard title={item.reference} content={item.content} />
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
          {/* <IonButton
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
          </IonButton> */}
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
    handleClick();
    loadNextItem();
  }

  function handleSuccess() {
    handleClick();
    setCorrect((correct) => [...correct, currentItem]);
    loadNextItem();
  }

  function loadTestData(data: any) {
    const array = data.map((verse: any) => {
      return {
        reference: verse.reference,
        content: verse.content,
      } as Verse;
    });
    return array;
  }

  function loadNextItem() {
    // Get the position of the current item in the array of items
    const verses = loadTestData(data);
    const indexOfItem = verses.findIndex(
      (i: any) => i.reference === currentItem.reference
    );
    const next = verses[indexOfItem + 1];
    console.log(`Next item: ${JSON.stringify(next)}`);
    console.log(indexOfItem);
    if (indexOfItem + 1 !== verses.length) {
      // Go to next item
      setCurrentItem(next);
    } else {
      // Already on last item
      alert('all done!');
    }
  }

  function handleClick() {
    setShowContents(!showContents);
    const promptText = showContents ? 'Tap to reveal' : "How'd you do?";
    setPrompt(promptText);
  }

  return (
    <div className="container">
      {currentItem.reference && renderContent(currentItem)}
    </div>
  );
};

export default StudySessionContent;
