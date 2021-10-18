import React, { useContext } from 'react';
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
import { book, person, home, searchOutline } from 'ionicons/icons';

// Import global store
import { Store, globalContext } from '././store/Store';

// Import pages
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import LearnPage from './pages/LearnPage';
import ProfilePage from './pages/ProfilePage';
import StudyPage from './pages/StudyPage';

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

const App: React.FC = () => {
  const { globalState } = useContext(globalContext);
  console.log(globalState);
  return (
    <Store>
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
              <Route path="/profile">
                <ProfilePage />
              </Route>
              <Route exact path="/learn/study">
                <StudyPage />
              </Route>
              <Route exact path="/search">
                <ExplorePage />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
            {/* Define tab bar */}
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="search" href="/search">
                <IonIcon icon={searchOutline} />
                <IonLabel>Search</IonLabel>
              </IonTabButton>
              <IonTabButton tab="learn" href="/learn">
                <IonIcon icon={book} />
                <IonLabel>Learn</IonLabel>
              </IonTabButton>
              <IonTabButton tab="profile" href="/profile">
                <IonIcon icon={person} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </Store>
  );
};

export default App;
