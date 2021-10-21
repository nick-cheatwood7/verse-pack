// Import types
import { UserCard } from '../types';

export const getSavedCards = () => {
  const storedCards = localStorage.getItem('user_cards');
  try {
    return JSON.parse(String(storedCards));
  } catch (err) {
    return null;
  }
};

export const saveCard = (card: UserCard) => {
  let storedCards = localStorage.getItem('user_cards');

  if (storedCards) {
    // Update the card on file (if found)
    let modifiedCards = JSON.parse(storedCards).map((storedCard) => {
      let reference = storedCard.reference;
      let content = storedCard.content;

      if (storedCard.id === card.id) {
        reference = card.reference;
        content = card.content;
      }

      return {
        ...storedCard,
        reference: reference,
        content: content,
      };
    });

    // Update cards in localStorage.
    localStorage.setItem('defaultUsers', JSON.stringify(modifiedCards));
  } else {
    const cardArray = new Array(card);
    localStorage.setItem(`user_cards`, JSON.stringify(cardArray));
  }

  console.log(getSavedCards());
};

export const updateCard = (pre: UserCard, post: UserCard) => {
  let storedCards = getSavedCards();
  if (storedCards) {
    const idx = storedCards.indexOf(JSON.stringify(pre));
    localStorage.setItem(`user_cards[${idx}]`, JSON.stringify(post));
    return JSON.parse(String(localStorage.getItem(`user_cards[${idx}]`)));
  } else {
    return null;
  }
};

export const clearSavedCards = () => {
  localStorage.removeItem('user_cards');
};
