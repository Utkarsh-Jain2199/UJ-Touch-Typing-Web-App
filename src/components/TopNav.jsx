import React from 'react'
import Contact from './Contact'

const TopNav = () => {
  return (
    <div className='topnav'>
    <span className='topnavtext'>
      <h6> HEY </h6>
      <span className='title'><b>UJ Touch Typing</b></span>
    </span>
    <span class='removeContact'>
      <Contact />
    </span>
  </div>
  )
}

export default TopNav