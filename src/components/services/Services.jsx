import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';
const Services = () => {
    return (
      <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2> 

        <div className='container services__container'>
          {/* <article className='service'>
            <div className='service__head'>
              <h3>UI/UX Design</h3>
            </div>
            <ul className='services__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem, ipsun dolor sit amet consectetur adipiscing elit. </p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem, ipsun dolor sit amet consectetur adipiscing elit. </p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem, ipsun dolor sit amet consectetur adipiscing elit. </p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem, ipsun dolor sit amet consectetur adipiscing elit. </p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Lorem, ipsun dolor sit amet consectetur adipiscing elit. </p>
              </li>
            </ul>
          </article> */}
          {/* UI/UX design */}
          <article className='service'>
            <div className='service__head'>
              <h3>Web development</h3>
            </div>
            <ul className='services__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Full Stack Development</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>eCommerce Development </p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Customized web app development</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Profesional Porfolio</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Blog Website</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Website revamping</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Static web service</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>React App development</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Bug fixes</p>
              </li>
            </ul>
          </article>
          {/* END OF WEB DEVELOPMENT */}
          <article className='service'>
            <div className='service__head'>
              <h3>Machine Learning and Data Analysis</h3>
            </div>
            <ul className='services__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Data Analysis </p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Data Manipulation</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Data Visualization </p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Data Insight generation</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Machine learning Pipline development</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    )
}

export default Services;