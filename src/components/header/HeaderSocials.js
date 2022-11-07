import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import { Animated } from "react-animated-css";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <Animated animationIn="bounceInDown" animationOut="tada" animationInDuration={2000} animationInDelay={0} isVisible={true}>
        <a href="https://linkedin.com" target='_blank'> <BsLinkedin/> </a>
      </Animated>
      <Animated animationIn="bounceInDown" animationOut="tada" animationInDuration={2000} animationInDelay={1000} isVisible={true}>
      <a href="https://github.com" target='_blank'> <FaGithub/> </a>
      </Animated>
      <Animated animationIn="bounceInDown" animationOut="tada" animationInDuration={2000} animationInDelay={2000} isVisible={true}>
      <a href="https://dribbble.com" target='_blank'> <FiDribbble/> </a>
      </Animated>
    </div>
  )
}

export default HeaderSocials