import {Component} from 'react'
import './index.css'

class GameOverImg extends Component {
  render() {
    const {score, onplayAgain} = this.props
    const onPlayAgain = () => {
      onplayAgain()
    }
    return (
      <div className="game-Over-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophyImg"
        />
        <p className="yourScore">YOUR SCORE</p>
        <h1 className="score">{score}</h1>
        <button className="button" type="button" onClick={onPlayAgain}>
          <img
            className="dis-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    )
  }
}
export default GameOverImg
