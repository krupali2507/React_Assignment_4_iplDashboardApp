// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetail} = props
  const {id, name, teamImageUrl} = teamDetail

  return (
    <Link to={`/team-matches/${id}`} className="team-info-container">
      <img src={teamImageUrl} alt={name} className="team-logo" />
      <h1 className="team-name">{name}</h1>
    </Link>
  )
}

export default TeamCard
