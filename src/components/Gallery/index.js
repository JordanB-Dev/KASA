import { createRef, useEffect, useState } from 'react'
import { ReactComponent as ArrowLeft } from '../../assets/images/icons/chevron-left.svg'
import { ReactComponent as ArrowRight } from '../../assets/images/icons/chevron-right.svg'

const Gallery = (props) => {
  const { pictures } = props

  const galleryRef = createRef(null)
  const [position, setPosition] = useState(1)
  const [width, setWidth] = useState(0)
  const [transitionTime, setTransitionTime] = useState(0)

  function handleResize() {
    setTransitionTime(0)
    setWidth(galleryRef.current.clientWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  })

  const handleClickPrevious = () => {
    setTransitionTime(0.8)
    position === 1 ? setPosition(pictures.length) : setPosition(position - 1)
  }

  const handleClickNext = () => {
    setTransitionTime(0.8)
    position === pictures.length ? setPosition(1) : setPosition(position + 1)
  }

  return (
    <div className="gallery" ref={galleryRef}>
      {pictures.length > 1 && (
        <ArrowLeft
          className="gallery_arrowLeft"
          onClick={() => handleClickPrevious()}
        />
      )}

      {pictures.map((picture, i) => (
        <img
          key={`picture-${i + 1}`}
          src={picture}
          alt="accomodations"
          style={{
            left: `${width * (i - (position - 1))}px`,
            transition: `left ${transitionTime}s ease-in-out`,
          }}
        />
      ))}

      <p className="gallery_counter">
        {position}/{props.pictures.length}
      </p>

      {pictures.length > 1 && (
        <ArrowRight
          className="gallery_arrowRight"
          onClick={() => handleClickNext()}
        />
      )}
    </div>
  )
}

export default Gallery
