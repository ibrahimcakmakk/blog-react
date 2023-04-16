import React from 'react'
import "./header.css"


export default function Header() {
  return (
    <div className='header'>
       <div className="headerTitles">
            <span className='headerTitleSm'>My & First</span>
            <span className='headerTitleLg'>Blog</span>
       </div>
       <img className='headerImg' 
       src='https://i.pinimg.com/564x/4c/96/fb/4c96fbd32aa9b5d9e9aa7b9ffa332d88.jpg' />
    </div>
  )
}
