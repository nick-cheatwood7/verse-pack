import React, { useState, useEffect, useContext } from 'react';
import {
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonTitle,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonText,
} from '@ionic/react';
import { addCircleOutline, addOutline, createOutline } from 'ionicons/icons';
import { UserCard, Verse } from '../../types';
import { globalContext } from '../../store/Store';

import data from '../../test/learnData.test.json';

const renderItemList = (items: Array<Verse>) => {
  return items.map((item, idx) => {
    return <IonItem key={idx}>{item.reference}</IonItem>;
  });
};

const loadTestData = (data: any) => {
  const array = data.map((verse: any) => {
    return {
      reference: verse.reference,
      content: verse.content,
    } as Verse;
  });
  return array;
};

const ItemList: React.FC = () => {
  // Link global state
  const { globalState } = useContext(globalContext);
  // Define state
  const [items, setItems] = useState([]);
  // Lifecycle methods
  useEffect(() => {
    setItems(loadTestData(data));
    return () => {
      // Do nothing
    };
  }, [setItems]);

  const handleCreateCard = () => {
    // TODO:
    // Create card on DB and get the id back
    const cardToCreate: UserCard = {
      reference: '',
      content: '',
      userId: globalState.user.id,
    };
    // Load up the detail page and default to a new Verse
    // route to window
    alert(JSON.stringify(cardToCreate));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Your Cards</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Render the toolbar */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Your Cards</IonTitle>
            <IonButtons slot="end">
              {/* Render the create button */}
              <IonButton
                expand="block"
                fill="clear"
                color="primary"
                onClick={handleCreateCard}
              >
                <IonIcon size="large" icon={createOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>

          <br />
          <IonToolbar>
            <IonSearchbar placeholder="Search Cards" />
          </IonToolbar>
        </IonHeader>
        <IonList>
          {/* Render list items here */}
          {renderItemList(items)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ItemList;
