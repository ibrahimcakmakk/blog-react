import React from 'react'
import Header from '../../components/header/Header'

import Sidebar from '../../components/sidebar/Sidebar'
import Post from '../../components/post/Post'

import "./home.css"

export default function Home({isAuth}) {
  return (
    <>
        <Header />
        <div className='home'>
        <Post isAuth={isAuth} />
        <Sidebar />
        </div>
    </>
    
  )
}
