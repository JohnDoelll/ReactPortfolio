import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import {JackInTheBox } from "react-awesome-reveal";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <JackInTheBox>
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li> 
          </ul>
        </article>
        </JackInTheBox>
        {/* END of UI/UX */}
        <JackInTheBox>
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li> 
          </ul>
        </article>
        </JackInTheBox>
        {/* End of Web development */}
        <JackInTheBox>
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li>
             <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </li> 
          </ul>
        </article>
        </JackInTheBox>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services