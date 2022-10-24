import { NavLink } from 'react-router-dom'

const Thumb = (props) => {
  return (
    <NavLink to={`/accommodation?id=${props.id}`} className="thumb">
      <img src={props.url} alt={props.alt} />
      <div className="thumb_bg"></div>
      <p>{props.name}</p>
    </NavLink>
  )
}

export default Thumb
