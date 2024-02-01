// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {isSelected, languageFilter, setSeletedLanguage} = props
  const btnClassName = isSelected ? 'btn selected-btn' : 'btn'
  const onClickLanguage = () => {
    setSeletedLanguage(languageFilter.id)
  }
  return (
    <li>
      <button type="button" className={btnClassName} onClick={onClickLanguage}>
        {languageFilter.language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
