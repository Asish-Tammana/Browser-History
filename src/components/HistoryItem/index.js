import './index.css'

const HistoryItem = props => {
  const {eachItem, removeHistoryItem} = props
  const {id, title, timeAccessed, logoUrl, domainUrl} = eachItem

  const removeItem = () => {
    removeHistoryItem(id)
  }

  return (
    <li type="none" className="history-item" key={id}>
      <p className="time-accessed">{timeAccessed}</p>
      <div className="img-name-container">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p>{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        // eslint-disable-next-line react/no-unknown-property
        testid="delete"
        type="button"
        className="delete"
        onClick={removeItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
