import React from 'react'
import './Menu.scss'

const Menu = ({ onClick }) => {
  return (
    <div className="menu">
      <button onClick={() => onClick('asc')}>Sort Ascendingly</button>
      <button onClick={() => onClick('desc')}>Sort Descendingly</button>
    </div>
  )
}

export default Menu