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

    const {teamBannerUrl, latestMatchDetails} = updatedData
    this.setState({
      currentTeamBannerUrl: teamBannerUrl,
      latestMatchDetails,
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
