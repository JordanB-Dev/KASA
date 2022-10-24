import Thumb from '../Thumb'
import accommodation from '../../assets/data/data.json'

const ThumbsList = () => {
  const accommodationList = accommodation.map((data) => {
    return (
      <Thumb
        id={data.id}
        url={data.cover}
        key={data.id}
        name={data.title}
        alt={data.title}
      />
    )
  })

  return <div className="thumbs_list container">{accommodationList}</div>
}

export default ThumbsList
