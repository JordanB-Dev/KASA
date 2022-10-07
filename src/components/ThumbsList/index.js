import Thumb from '../Thumb'
import data from '../../assets/data/data.json'

const ThumbsList = () => {
  return (
    <div className="thumbs_list container">
      {data &&
        data.map((hotel, index) => (
          <Thumb
            id={hotel.id}
            url={hotel.cover}
            key={index}
            name={hotel.title}
            alt={hotel.title}
          />
        ))}
    </div>
  )
}

export default ThumbsList
