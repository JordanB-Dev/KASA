import Star from '../../assets/images/star.png'
import EmptyStar from '../../assets/images/emptystar.png'

const Rating = (props) => {
  const { data } = props

  let noteAccommodation = []
  let starComplete = true
  for (let index = 0; index < 5; index++) {
    if (index === parseInt(data?.rating)) {
      starComplete = false
    }
    if (starComplete === true) {
      noteAccommodation.push(
        <img
          key={index}
          className="star"
          src={Star}
          alt={`${data?.rating}/5`}
        />
      )
    } else {
      noteAccommodation.push(
        <img
          key={index}
          className="star"
          src={EmptyStar}
          alt={`${data?.rating}/5`}
        />
      )
    }
  }

  return <div className="rating">{noteAccommodation}</div>
}

export default Rating
