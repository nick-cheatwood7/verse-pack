// Cards contain the following:
/*
  {
    id: string,
    userId: string,
    reference: string,
    content: string
  }
*/
import { uuid } from 'uuidv4';
import { UserCard } from '../types';

class Card {
  readonly id: string;
  userId!: string; // to be set in-app via global state
  reference: string;
  content: string;

  constructor(card: UserCard) {
    this.id = (card && card.id) || uuid();
    this.userId = (card && card.userId) || '';
    this.reference = (card && card.reference) || '';
    this.content = (card && card.content) || '';
  }
}

export default Card;
