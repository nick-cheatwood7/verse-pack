import { IonTitle } from '@ionic/react'
import ExploreCard from '../ExploreCard/ExploreCard'
import './WelcomeContainer.css'

interface ContainerProps {
  day: string
  monthDate: string
  name: String
}

const WelcomeContainer: React.FC<ContainerProps> = ({
  day,
  monthDate,
  name,
}) => {
  return <IonTitle>{day}</IonTitle>
}

export default WelcomeContainer
