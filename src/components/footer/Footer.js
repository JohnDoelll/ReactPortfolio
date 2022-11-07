import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {BsTelegram} from 'react-icons/bs'
import {Rotate} from 'react-awesome-reveal'

const Footer = () => {
  return (
    <div>
      <footer>
        <a className='footer__logo'>Eldor</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
         <Rotate> <a href="https://facebook.com"><BsFacebook/></a> </Rotate> 
         <Rotate> <a href="https://instagram.com/eldor_shodmonov99"> <RiInstagramFill/> </a> </Rotate> 
         <Rotate> <a href="https://telegram.me/JohnDoell"> <BsTelegram/> </a> </Rotate> 
        </div>

        <div className="footer__copyright">
          <small> $copy; Created by Eldor Shodmonov </small>
        </div>

      </footer>
    </div>
  )
}

export default Footer