import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

const Footer = () => {
    return(
        <footer>
            <a href='#' className='footer__logo'>Chukwudumebi Ughonu</a>
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='footer__socials'>
                <a href='https://web.facebook.com/?_rdc=1&_rdr'><FaFacebookF/></a>
                <a href='https://www.instagram.com/placidughonu/'><FiInstagram/></a>
                <a href='https://twitter.com/PlacidUghonu'><IoLogoTwitter/></a>
                <a href="https://www.linkedin.com/in/chukwudumebiughonu" target="_blank"><BsLinkedin /></a>
                <a href="https://github.com/chukwudumebiughonu" target="_blank"><FaGithub/></a>
                <a href="https://dribbble.com/Chukwudumebi" target="_blank"><FiDribbble/></a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; Chukwudumebi Ughonu 2022</small>
            </div>
        </footer>
    )
}

export default Footer;