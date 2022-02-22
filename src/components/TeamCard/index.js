// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetail} = props
  const {id, name, teamImageUrl} = teamDetail

  return (
    <li className="team-info-container">
      <Link to={`/team-matches/${id}`} className="link-container">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
