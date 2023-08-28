import './index.css'

const TabItem = props => {
  const {tabDetails} = props
  const {tabId, displayText} = tabDetails

  return (
    <li className="tab-item-container ">
      <button type="button">{displayText}</button>
    </li>
  )
}

export default TabItem
