import { Dispatch } from 'react';

// Import types
import { User, Verse, Pack, StudyItem } from '../types';

export interface GlobalStateInterface {
  focus: boolean;
  isUserAuthenticated: boolean;
  currentUser?: User;
  persistenceType: string;
  dailyVerses?: Array<Verse> | [];
  studySession?: Array<StudyItem> | [];
  userPacks?: Array<Pack> | [];
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};