import {Component} from 'react'
import './index.css'

class ThumbsItems extends Component {
  render() {
    const {thumbDetails, onImages} = this.props
    const {imageUrl, thumbnailUrl} = thumbDetails
    const onImagesSele = () => {
      onImages(imageUrl)
    }
    return (
      <li>
        <button type="button" className="btn">
          <img
            src={thumbnailUrl}
            alt="thumbnail"
            onClick={onImagesSele}
            className="thum-img"
          />
        </button>
      </li>
    )
  }
}

export default ThumbsItems
