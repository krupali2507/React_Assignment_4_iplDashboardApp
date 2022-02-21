// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const {teams} = await response.json()
    const formattedTeamList = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: formattedTeamList})
  }

  render() {
    const {teamsList} = this.state
    return (
      <div className="home-bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="teams-detail-container">
          {teamsList.map(eachTeam => (
            <TeamCard teamDetail={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
