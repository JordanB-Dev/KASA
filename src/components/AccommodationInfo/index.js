import Tags from '../Tags'
import Host from '../Host'
import Rating from '../Rating'

const AccommodationInfo = (props) => {
  const { data } = props
  const { title, location } = data

  const tags = data?.tags.map((tags, index) => {
    return <Tags key={index} nom={tags} />
  })

  return (
    <div className="accommodation_info container">
      <div className="accommodation_info_container_left">
        <h2>{title}</h2>
        <p>{location}</p>
        <div className="tag_list">{tags}</div>
      </div>
      <div className="accommodation_info_container_right">
        <Host data={data} />
        <Rating data={data} />
      </div>
    </div>
  )
}

export default AccommodationInfo
