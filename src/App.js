import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeLanguageId: languageGreetingsList[0].id}

  changeLanguage = id => {
    this.setState({activeLanguageId: id})
  }

  render() {
    const {activeLanguageId} = this.state
    const activeLanObj = languageGreetingsList.find(
      eachObj => eachObj.id === activeLanguageId,
    )

    return (
      <div className="app-container">
        <h1>Multilingual Greetings</h1>
        <ul className="buttons-list">
          {languageGreetingsList.map(eachObj => {
            const onClickingButton = () => {
              this.changeLanguage(eachObj.id)
            }

            return (
              <li key={eachObj.id}>
                <button
                  type="button"
                  className={
                    eachObj.id === activeLanguageId
                      ? 'active-butt'
                      : 'not-active-butt'
                  }
                  onClick={onClickingButton}
                >
                  {eachObj.buttonText}
                </button>
              </li>
            )
          })}
        </ul>
        <img
          src={activeLanObj.imageUrl}
          alt={activeLanObj.imageAltText}
          className="lan-pic"
        />
      </div>
    )
  }
}
export default App
