// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails

  return (
    <li className="app-item-container">
      <img src={imageUrl} className="app-item-image" />
    </li>
  )
}

export default AppItem
