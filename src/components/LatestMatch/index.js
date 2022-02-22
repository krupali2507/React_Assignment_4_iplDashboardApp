// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    competingTeamLogo,
    secondInnings,
    manOfTheMatch,
    firstInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-detail-container">
      <div className="left-side-latestmatch-container">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="competing-team-logo"
      />
      <div className="right-side-latestmatch-container">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
      </div>
    </div>
  )
}

export default LatestMatch
