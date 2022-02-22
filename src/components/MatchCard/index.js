// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetail} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetail
  const matchStatusClass = matchStatus === 'Lost' ? 'red' : 'green'

  return (
    <li className="competing-team-detail-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={matchStatusClass}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
