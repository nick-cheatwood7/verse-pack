import React, { useState, useEffect, useContext } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButtons,
  IonBackButton,
  IonButton,
  IonItem,
  IonTextarea,
  IonFooter,
  IonIcon,
} from '@ionic/react';

// Import components
import { trashBinOutline } from 'ionicons/icons';
import { globalContext } from '../../store/Store';

// Import utils
import { saveCard, getSavedCards } from '../../utils/Storage';

// Import Types/Classes
import { UserCard } from '../../types';
import Card from '../../models/Card';

// Import styles
import './ItemPage.css';

interface ComponentProps {
  card: UserCard;
}

// TODO:
// OnMount, render a new item card with empty term & criteria, default to edit mode
// Render action buttons on the bottom

const ItemPage: React.FC<ComponentProps> = ({ card }) => {
  const { globalState } = useContext(globalContext);
  const [reference, setReference] = useState(card.reference);
  const [content, setContent] = useState(card.content);

  // Component Lifecycle
  useEffect(() => {
    return () => {
      // On exit, attempt to overwrite or save the card;
      const currentCard = new Card({
        userId: globalState.user.id,
        reference,
        content,
      } as UserCard);
      saveCard(currentCard);
    };
  }, [card, content, globalState, reference]);

  return (
    <IonPage>
      {/* Render the header */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Edit card</IonTitle>
          <IonButtons slot="end">
            <IonButton expand="block" fill="clear" color="danger">
              <IonIcon icon={trashBinOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      {/* Render the content */}
      <IonContent>
        {/* Render the reference header */}
        {/* Render the content */}
        <IonItem lines="none">
          <IonInput
            autoCapitalize="on"
            value={reference}
            placeholder="Reference"
            className="title"
            onIonChange={(e) => setReference(e.detail.value!)}
          />
        </IonItem>
        <IonItem lines="none">
          <IonTextarea
            autoGrow
            value={content}
            placeholder="Content"
            onIonChange={(e) => setContent(e.detail.value!)}
          />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default ItemPage;
