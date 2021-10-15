//  Import types
import Verse from './Verse'

type User = {
  readonly id: string
  name: string
  email: string
  favorites: Array<Verse> | []
  packs: []
  sessionsPerWeek: number
  sessionsThisWeek: number
}

export default User
