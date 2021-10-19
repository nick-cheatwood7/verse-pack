// Import needed types
import { Verse } from '../types';

export function getAsVerse(json: any) {
  return { reference: json.reference, content: json.content } as Verse;
}

export function getAsVerseArray(array) {
  return array.map((item: any) => {
    return { reference: item.reference, content: item.content } as Verse;
  });
}
