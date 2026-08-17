import React from 'react'
import head from './Header.module.css'
const Header = () => {
  return (
    <div className={head.style}>
      <h1>Hi i am header</h1>
      <button className='btn'>Login</button>
    </div>
  )
}

export default Header
