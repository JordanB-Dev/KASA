import { useState } from 'react'
import fleche from '../../assets/images/icons/fleche.svg'

const DropDown = ({ tilte, description }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="dropdown" id={`dropdown-${tilte}`}>
      <div className="dropdown_header">
        <div className="dropdown_tilte">{tilte}</div>
        <a
          className={`dropdown_fleche ${open}`}
          href={`#dropdown-${tilte}`}
          onClick={() => setOpen(!open)}
        >
          <img src={fleche} alt="Ouvrir cette liste" />
        </a>
      </div>
      {open && <div className="dropdown_description">{description}</div>}
    </div>
  )
}

export default DropDown
