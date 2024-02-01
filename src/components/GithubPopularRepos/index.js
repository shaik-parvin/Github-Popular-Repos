import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
const url = 'https://apis.ccbp.in/popular-repos?language='

class GithubPopularRepos extends Component {
  state = {isLoading: true, data: [], selectedLanguage: 'ALL'}

  componentDidMount() {
    this.getRepositories(languageFiltersData[0].id)
  }

  setIsLoading = loadingStatus => {
    this.setState({isLoading: loadingStatus})
  }

  getRepositories = async selectedLanguage => {
    this.setIsLoading(true)
    const response = await fetch(`${url}${selectedLanguage}`)
    const fetchedData = await response.json()
    const updatedData = fetchedData.popular_repos.map(each => ({
      id: each.id,
      name: each.name,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))
    this.setState({data: updatedData, isLoading: false})
  }

  renderlanguageList = () => {
    const {data} = this.state

    return (
      <ul className="language-list">
        {data.map(each => (
          <RepositoryItem key={each.id} repository={each} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  setSeletedLanguage = id => {
    this.setState({selectedLanguage: id})
    this.getRepositories(id)
  }

  renderLanguageFiltersList = () => {
    const {selectedLanguage} = this.state

    return (
      <ul className="list-container">
        {languageFiltersData.map(each => (
          <LanguageFilterItem
            key={each.id}
            isSelected={each.id === selectedLanguage}
            languageFilter={each}
            setSeletedLanguage={this.setSeletedLanguage}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="language-container">
        <h1 className="heading">Popular</h1>
        {this.renderLanguageFiltersList()}
        {isLoading ? this.renderLoader() : this.renderlanguageList()}
      </div>
    )
  }
}

export default GithubPopularRepos
