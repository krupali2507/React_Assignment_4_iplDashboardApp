// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: '',
    currentTeamBannerUrl: '',
  }

  componentDidMount() {
    this.getTeamMatchesDetail()
  }

  getTeamMatchesDetail = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/ipl/${id}`

    const response = await fetch(url)
    const data = await response.json()
    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }

    const formatData = eachMatch => ({
      id: eachMatch.id,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    })

    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedData

    const formattedLatestMatchData = formatData(latestMatchDetails)

    const formattedRecentMatchData = recentMatches.map(eachMatch =>
      formatData(eachMatch),
    )

    console.log(formattedLatestMatchData)
    console.log(formattedRecentMatchData)

    this.setState({
      currentTeamBannerUrl: teamBannerUrl,
      latestMatchDetails: formattedLatestMatchData,
    })
  }

  render() {
    const {currentTeamBannerUrl, latestMatchDetails} = this.state
    return (
      <div className="team-detail-container">
        <div className="inside-container">
          <img
            src={currentTeamBannerUrl}
            alt="team banner"
            className="team-banner-style"
          />
          <p>Latest Matches</p>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
      </div>
    )
  }
}

export default TeamMatches
