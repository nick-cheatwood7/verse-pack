import { Dispatch } from 'react';

// Import types
import { User, Verse, Pack, StudyItem } from '../types';

export interface GlobalStateInterface {
  focus: boolean;
  isUserAuthenticated: boolean;
  persistenceType: string;
  dailyVerses: Array<Verse>;
  study: {
    items: Array<StudyItem>;
    progress: number;
  };
  userPacks: Array<Pack>;
  user: User;
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};
