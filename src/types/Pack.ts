import Verse from './Verse';

type Pack = {
  createdByUserId: string;
  title: string;
  description?: string;
  verses: Array<Verse> | [];
  saves: number;
};

export default Pack;
