// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repository} = props

  return (
    <li className="card-item">
      <img src={repository.avatarUrl} className="img" alt={repository.name} />
      <h1 className="name">{repository.name}</h1>
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon"
        />
        <p className="text">{repository.starsCount}</p>
      </div>
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icon"
        />
        <p className="text">{repository.forksCount}</p>
      </div>
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icon"
        />
        <p className="text">{repository.issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
