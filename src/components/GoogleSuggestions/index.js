// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onClickInput = event => {
    this.setState({searchInput: event.target.value})
  }

  clickOnSuggestion = suggestion => {
    document.getElementById('input').value = String(suggestion)
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchListBasedOnInput = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="mainContainer">
        <div className="card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="googleLogo"
          />
          <ul className="searchHistoryContainer">
            <div className="searchContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="searchImg"
                alt="search icon"
                placeholder="Search Google"
              />
              <input
                type="search"
                className="inputEl"
                onChange={this.onClickInput}
                id="input"
              />
            </div>
            {searchListBasedOnInput.map(eachItem => (
              <SuggestionItem
                suggestionItem={eachItem}
                key={eachItem.id}
                clickEvent={this.clickOnSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
