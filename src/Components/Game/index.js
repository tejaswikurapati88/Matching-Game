import {Component} from 'react'
import TabsList from '../TabsList'
import ThumbsItems from '../ThumbsItems'
import GameOverImg from '../GameOverImg'
import './index.css'

class Game extends Component {
  constructor(props) {
    super(props)
    const {imagesList} = this.props
    const {imageUrl} = imagesList[0]

    const filtered = imagesList.filter(e => e.category === 'FRUIT')

    this.state = {
      score: 0,
      secs: 60,

      matchedImgUrl: imageUrl,
      thumnails: filtered,
      isSelected: false,
      correctAns: true,
    }
  }

  componentDidMount() {
    setInterval(this.tickTick, 1000)
  }

  selectedTab = tabId => {
    const {imagesList} = this.props
    const listForThumnails = imagesList.filter(each => each.category === tabId)
    this.setState({thumnails: listForThumnails, isSelected: true})
  }

  tickTick = () => {
    const {secs, correctAns} = this.state
    if (secs > 0 && correctAns === true) {
      this.setState(prevState => ({secs: prevState.secs - 1}))
    } else {
      clearInterval(this.timerID)
      this.setState({correctAns: false})
    }
  }

  onImages = imageUrl => {
    const {imagesList} = this.props
    const {matchedImgUrl} = this.state
    const number = Math.floor(Math.random() * imagesList.length)
    if (imageUrl === matchedImgUrl) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        matchedImgUrl: imagesList[number].imageUrl,
      }))
    } else {
      this.setState({correctAns: false})
    }
    console.log(number)
  }

  onplayAgain = () => {
    const {imagesList} = this.props
    const {imageUrl} = imagesList[0]

    const filtered = imagesList.filter(e => e.category === 'FRUIT')
    this.setState({
      score: 0,
      secs: 60,
      matchedImgUrl: imageUrl,
      thumnails: filtered,
      isSelected: false,
      correctAns: true,
    })
  }

  render() {
    const {tabsList} = this.props
    const {
      score,
      secs,
      matchedImgUrl,
      thumnails,
      isSelected,
      correctAns,
    } = this.state
    return (
      <div className="bg-container">
        <ul className="navbar-cont">
          <li>
            <img
              className="gamelogo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
            />
          </li>
          <div className="nav-sub-cont">
            <li>
              <p className="dis">
                Score:<span className="digits">{score}</span>
              </p>
            </li>
            <li className="dis">
              <img
                className="dis-img"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p className="digits">{secs} sec</p>
            </li>
          </div>
        </ul>
        {correctAns ? (
          <div className="container">
            <img className="big-img" alt="match" src={matchedImgUrl} />
            <div className="name-cont">
              <ul>
                {tabsList.map(eachTab => (
                  <TabsList
                    tabItem={eachTab}
                    isSelected={isSelected}
                    selectedTab={this.selectedTab}
                    key={eachTab.tabId}
                  />
                ))}
              </ul>
            </div>
            <div className="thumbnail-container">
              <ul>
                {thumnails.map(eachThumbNail => (
                  <ThumbsItems
                    thumbDetails={eachThumbNail}
                    onImages={this.onImages}
                    key={eachThumbNail.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="container">
            <GameOverImg onplayAgain={this.onplayAgain} score={score} />
          </div>
        )}
      </div>
    )
  }
}
export default Game
