import { Fragment } from 'react'
import accommodation from '../assets/data/data.json'
import { useLocation } from 'react-router-dom'
import AccommodationContent from '../components/AccommodationContent'
import ErrorPage from './ErrorPage'

const Accommodation = () => {
  const { search } = useLocation()
  const idaccommodation = new URLSearchParams(search).get('id')
  const data = accommodation.filter(
    (accommodation) => accommodation.id.toString() === idaccommodation
  )[0]

  return (
    <Fragment>
      {data ? <AccommodationContent data={data} /> : <ErrorPage />}
    </Fragment>
  )
}

export default Accommodation
