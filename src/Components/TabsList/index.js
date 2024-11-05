import {Component} from 'react'
import './index.css'

class TabsList extends Component {
  render() {
    const {tabItem, selectedTab, cat} = this.props
    const {tabId, displayText} = tabItem
    const onSelection = () => {
      selectedTab(tabId)
    }
    const selectedClass = cat === tabId ? 'selec-Class' : ''

    return (
      <li>
        <button type="button" className="btn" onClick={onSelection}>
          <p className={`text ${selectedClass}`}>{displayText}</p>
        </button>
      </li>
    )
  }
}
export default TabsList
