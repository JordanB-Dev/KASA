import AccommodationInfo from '../AccommodationInfo'
import DropDown from '../Dropdown'
import Gallery from '../Gallery'

const AccommodationContent = (props) => {
  const { data } = props

  const equipementsDropDown = data?.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>
  })

  return (
    <div className="accommodation_content container">
      <Gallery pictures={data.pictures} data={data} />
      <AccommodationInfo data={data} />
      <div className="dropdown_section">
        <DropDown
          description={data?.description}
          data={data}
          tilte="Description"
        />
        <DropDown tilte="Équipements" description={equipementsDropDown} />
      </div>
    </div>
  )
}

export default AccommodationContent
