import { ActionType, GlobalStateInterface } from './types';
import { initialState } from './Store';

const Reducer = (state: GlobalStateInterface, action: ActionType): any => {
  switch (action.type) {
    case 'SET_FOCUS':
      return {
        ...state,
        focus: action.payload,
      };
    case 'SET_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'AUTHENTICATE_USER':
      return {
        ...state,
        isUserAuthenticated: action.payload,
      };
    case 'SET_PERSISTENCE':
      return {
        ...state,
        persistenceType: action.payload,
      };
    case 'PURGE_STATE':
      return {
        initialState,
      };
    default:
      return state;
  }
};

export default Reducer;
