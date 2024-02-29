// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, clickEvent} = props
  const {suggestion} = suggestionItem

  const onClickArrow = () => {
    clickEvent(suggestion)
  }

  return (
    <li className="suggestionContainer">
      <p className="suggestionText">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrowImg"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem
