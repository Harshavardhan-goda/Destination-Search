import './index.css'

const DestinationItem = props => {
  const {destinationItemList} = props
  const {name, imgUrl} = destinationItemList
  return (
    <li className="list-card">
      <img src={imgUrl} alt={name} className="image" />
      <p className="paragraph">{name}</p>
    </li>
  )
}

export default DestinationItem
