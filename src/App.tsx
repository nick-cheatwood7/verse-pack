import React, { useContext, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  book,
  person,
  home,
  searchOutline,
  albumsOutline,
} from 'ionicons/icons';

// Import global store
import { globalContext } from './store/Store';

// Import pages
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import LearnPage from './pages/LearnPage';
import ProfilePage from './pages/ProfilePage';
import StudyPage from './pages/StudyPage';
import ItemPage from './pages/ItemPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/FloatingTabBar.css';
import ItemList from './pages/ItemList';

const App: React.FC = () => {
  const { globalState } = useContext(globalContext);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/* Define app routes */}
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/learn">
              <LearnPage />
            </Route>
            <Route exact path="/learn/study">
              <StudyPage />
            </Route>
            <Route exact path="/card/:id">
              <ItemPage verse={{ reference: 'Genesis 1:1', content: 'blah' }} />
            </Route>
            <Route exact path="/cards">
              <ItemList />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          {/* Define tab bar */}
          <IonTabBar slot="bottom" hidden={globalState.focus}>
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="learn" href="/learn">
              <IonIcon icon={book} />
              <IonLabel>Learn</IonLabel>
            </IonTabButton>
            <IonTabButton tab="cards" href="/cards">
              <IonIcon icon={albumsOutline} />
              <IonLabel>Cards</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
