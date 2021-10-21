import React, { useContext } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonList,
  IonItem,
} from '@ionic/react';
import { createOutline } from 'ionicons/icons';
import { UserCard } from '../../types';
import { Card } from '../../models';
import { globalContext } from '../../store/Store';

interface ComponentProps {
  cards: Array<UserCard>;
}

const CardList: React.FC<ComponentProps> = ({ cards }) => {
  const { globalState } = useContext(globalContext);
  const handleCreateCard = () => {
    // TODO:
    // Create card on DB and get the id back
    const cardToCreate = new Card({
      reference: '',
      content: '',
      userId: globalState.user.id,
    } as UserCard);
    // Load up the detail page and default to a new Verse
    // route to window
  };
  const renderItemList = (cards: Array<UserCard>) => {
    return cards.map((card, idx) => {
      return <IonItem key={idx}>{card.reference}</IonItem>;
    });
  };
  return (
    <div>
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
          {renderItemList(cards)}
        </IonList>
      </IonContent>
    </div>
  );
};

export default CardList;
