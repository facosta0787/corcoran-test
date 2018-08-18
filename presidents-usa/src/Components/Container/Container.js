import React from 'react'
import './Container.scss'

const Container = ({ children }) => {
  return(
    <div className="container__layout">
      <div className="container__content">
        { children }
      </div>
    </div>
  )
}

export default Container