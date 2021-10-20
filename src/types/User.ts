//  Import types
import Verse from './Verse';
import Pack from './Pack';

type User = {
  readonly id: string;
  name: string;
  email: string;
  // favorites: Array<Verse> | [];
  // packs: Array<Pack> | [];
  // sessionsPerWeek: number;
  // sessionsThisWeek: number;
};

export default User;
