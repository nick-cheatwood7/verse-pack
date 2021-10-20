import React from 'react';
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
import ItemCard from '../../components/ItemCard';

// Import Types
import { Verse } from '../../types';
import VerseSlides from '../../components/VerseSlides';

// Import styles
import './ItemPage.css';
import { trashBinOutline } from 'ionicons/icons';

interface ComponentProps {
  verse: Verse;
}

// TODO:
// OnMount, render a new item card with empty term & criteria, default to edit mode
// Render action buttons on the bottom

const ItemPage: React.FC<ComponentProps> = ({ verse }) => {
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
            value={verse.reference}
            placeholder="Reference"
            className="title"
          />
        </IonItem>
        <IonItem lines="none">
          <IonTextarea autoGrow value={verse.content} placeholder="Content" />
        </IonItem>
      </IonContent>
      {/* Render the footer */}
    </IonPage>
  );
};

export default ItemPage;
