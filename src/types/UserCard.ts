import { Verse } from './index';

interface UserCard extends Verse {
  id?: string;
  userId: string;
}

export default UserCard;
