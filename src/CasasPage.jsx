import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import './casas.css'

const CasasPage = props => {
  return (
    <div>
      <Navbar />
      <div className='header-container flex row full-view' >
        <div className="home">
          <div className="casa1">
              <div className="img1">
              </div>
              <p>Estado: MS</p>
              <p>Cidade: Nova Andradina</p>
              <NavLink to='/casanumeroum' className={`link`}>
              <button>Interesado?</button>
              </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CasasPage