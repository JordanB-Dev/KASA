import banner_home from '../../assets/images/home.jpg'
import banner_about from '../../assets/images/about.jpg'

const Banner = (props) => {
  return (
    <div className="banner">
      {props.name === 'Home' ? (
        <img src={banner_home} alt="Un paysage de falaises" />
      ) : (
        <img src={banner_about} alt="Un paysage de montagnes" />
      )}
      <h1 className="banner_text">
        {props.name === 'Home' ? 'Chez vous, partout et ailleurs' : ''}
      </h1>
    </div>
  )
}

export default Banner
