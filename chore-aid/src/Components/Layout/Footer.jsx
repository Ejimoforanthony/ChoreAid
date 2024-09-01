import React from 'react'
import FacebookIcon from '../../images/icons8-facebook.svg';
import TwitterIcon from '../../images/icons8-twitter.svg';
import InstagramIcon from '../../images/icons8-instagram.svg';
import GmailIcon from '../../images/icons8-gmail.svg';

const Footer = () => {
  return (
    <footer className='footer'>
        <section className='footer-sec1'>
            <h1><a href='HomePage.html'target='self' title="choreAid Home" rel="noopener noreferrer">ChoreAid</a></h1>
            <p><a href='mailto:choreaid@gmail.com' target="_blank" title="email" rel="noopener noreferrer">Email Us</a></p>
            <p><a href='"tel:+2347899877997' target="_blank" title="Give Us a Call" rel="noopener noreferrer">Call Us</a></p>
                <div class="social-media-links">
                    <a href="https://www.facebook.com/yourprofile" target="_blank" rel='noreferrer' title="Facebook">
                    <img src={FacebookIcon} alt="Facebook" width="40" height="40" className='footer-sec1-logo'/>
                    </a>
                    <a href="https://www.twitter.com/yourprofile" target="_blank" rel='noreferrer' title="Twitter">
                    <img src={TwitterIcon} alt="Twitter" width="40" height="40" className='footer-sec1-logo'/>
                    </a>
                    <a href="https://www.instagram.com/yourprofile" target="_blank"rel='noreferrer' title="Instagram">
                    <img src={InstagramIcon} alt='Instagram' width="40" height="40" className='footer-sec1-logo'/>
                    </a>
                    <a href="https://www.gmail.com" target="_blank" rel='noreferrer' title="Gmail">
                    <img src={GmailIcon} alt='Gmail' width="40" height="40" className='footer-sec1-logo'/>
                    </a>
                </div>
        </section>

        <section className='footer-sec2'>
            <div>
                <h3><a href='/'target='blank' rel='noreferrer'>Quick links</a></h3>
                <p><a href='/'target='blank' rel='noreferrer'>About Us</a></p>
                <p><a href='/'target='blank' rel='noreferrer'>Blogs</a></p>
                <p><a href='/'target='blank' rel='noreferrer'>Terms & conditions</a></p>
            </div>
            <div>
            <h3><a href='/'target='blank' rel='noreferrer'>Help Center</a></h3>
                <p><a href='/'target='blank' rel='noreferrer'>Privacy Policy</a></p>
                <p><a href='/'target='blank' rel='noreferrer'>Contact Support</a></p>
                <p><a href='/'target='blank' rel='noreferrer'>FAQ</a></p>
            </div>
            <div>
                <h3><a href='/'target='blank' rel='noreferrer'>Join our Team</a></h3>
                <p><a href='/'target='blank' rel='noreferrer'>Career</a></p>
                <p><a href='/'target='blank' rel='noreferrer'>Meet our team</a></p>
            </div>
        </section>
    </footer>
  )
}

export default Footer
