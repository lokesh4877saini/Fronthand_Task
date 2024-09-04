import React from 'react'
import './app.css'
import logo from './assets/logo.png'
import { FaTwitter } from "react-icons/fa";
import phonees from './assets/Phones.png'
import Phone1 from './assets/Phone_1.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { useState } from 'react';
const App = () => {
  const [first, setFirst] = useState(false)
  const showMenu = ()=>{
    setFirst(!first)

  }
  return (
    <>
      <header>
        <nav>
          <div className="d1_50">
            <span>
              <img src={logo} alt="logo" />
            </span>
          </div>
          <span className='Menu'> <button onClick={showMenu}   >{first?<IoIosClose/>:<RxHamburgerMenu/>}</button>
          </span>
          <div className={(first?'menu':'') + "navigated"} >
            <div className="menu">
            <ul>
              <li>Home</li>
              <li>Product</li>
              <li>Feq</li>
              <li>Contact</li>
            </ul>
            </div>
          </div>
          <div className="d2_50 navigate">
            <ul>
              <li>Home</li>
              <li>Product</li>
              <li>Feq</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </header>
      <section className='appwork'>
        <div className="overlay">
          <h2>Food app</h2>
          <h1>Why Stay hungary when</h1>
          <h1>you can order form Bella Onojie</h1>
          <p>Download the bell onojie's food app now on</p>
          <div className="button">
            <button className="playstore">
              Play store
            </button>
            <button className="appstore">
              App store
            </button>
          </div>
        </div>
      </section>


      <section id='img_sec'>
        <div className="pngimg">
          <img src={phonees} alt="" />
        </div>
        <h1>How the app works</h1>
      </section>


      <section className="createaccount">
        <div className="content">
          <div className="d3_50">
            <div className="img">
              <img src={Phone1} alt="" />
            </div>
          </div>
          <div className="d4_50">
            <p>Create an account</p>
            <h1>Create/login to an existing </h1>
            <h1>  account to get started</h1>
            <span>
              <p>An account is created with your email and a disired password</p>
            </span>
          </div>
        </div>
      </section>



      <section className='downloadapp'>
        <div className="overlay">
          <h2>Download the app now.</h2>
          <p>Available on your favorite store. Start your premium exprience now</p>
          <div className="button">
            <button className="playstore">
              Play store
            </button>
            <button className="appstore">
              App store
            </button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="d_30">
            <span><img src={logo} alt="logo" /></span>
          </div>
          <div className="d_30 d_50">
            <span className='icon_btn' >{<FaTwitter />}</span>
            <span className='icon_btn' >{<AiFillFacebook />}</span>
            <span className='icon_btn' >{<AiFillInstagram />}</span>
          </div>
          <div className="d_30 d_50">
            <p>Copyright 2020 Bella-onojie
              .com</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App;