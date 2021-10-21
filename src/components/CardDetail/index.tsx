import React, { useState, useContext, useEffect } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonButton,
  IonIcon,
  IonContent,
  IonItem,
  IonInput,
  IonTextarea,
} from '@ionic/react';
import { trashBinOutline } from 'ionicons/icons';
import { globalContext } from '../../store/Store';
import { UserCard } from '../../types';
import { Card } from '../../models';
import { saveCard } from '../../utils/Storage';
import './CardDetail.css';

interface ComponentProps {
  card: UserCard;
}

const CardDetail: React.FC<ComponentProps> = ({ card }) => {
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
    <div>
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
    </div>
  );
};

export default CardDetail;
