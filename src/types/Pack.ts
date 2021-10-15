import Verse from './Verse'

type Pack = {
  userId: string
  title: string
  description?: string
  verses: Array<Verse> | []
  saves: number
}

export default Pack
