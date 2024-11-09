import { useState } from 'react';
import dialer from '../../images/helpcenter.dialer.png';
import gmail from '../../images/helpcenter.gmail.png';
import blog1 from '../../images/Helpcenterblog1.jpeg';
import blog2 from '../../images/Helpcenterblog2.jpeg';
import blog3 from '../../images/Helpcenterblog3.png';

const HelpCenterBot = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here,
        console.log("Email:", email, "Message:", message);

    };
  return (

<div>
    <section className='reach'>
        <h1>Reach out to Us!!!</h1>
    <div className='reach-out'>
        <div>
            <p>
                <img src={dialer} alt='dial'/>
                <a href='"tel:+234764564535' target="_blank" title="Give Us a Call" rel="noopener noreferrer"> +234 7064654335</a>
            </p>
            <p>
                <img src={gmail} alt='dail' />
                <a href='mailto:choreaid@gmail.com' target="_blank" title="email" rel="noopener noreferrer">choreaid@gmail.com</a>
            </p>
        </div>
        <form className="reachout-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                />
            </div>
            <div>
                 <label htmlFor="message">Message:</label>
                 <textarea
                 id="message"
                 value={message}
                 onChange={(e) => setMessage(e.target.value)}
                 placeholder="Your message"
                 required
                 ></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>
    <article className='policy'>
        <h1>Privacy Policy For ChoreAid!</h1>
        <p>
            Your privacy is important to us. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our website and use
            our servuces. Please read this policy carefully. if you do not agree with the terms
            of this Privacy policy, please do not acess the site.
        </p>
        <h2>Information We Collect</h2>
        <h3>Personal Information:</h3>

        <p>
            -When you register on our site, we collect personal information such as your name,
            email address, phone number, and any other information you voluntarily provide.
        </p>
        <h3>Chore Listings and Bookings:</h3>
        <p>
            -We collect details about chores posted and bookings made, including descriptions, dates, and times.
        </p>
    </article>
    <article className='theblog'>
        <h1>Blog!</h1>
        <p>
            In todays fast-paced world, balancing work, family, and household responsibilities can be overwhelming.
        </p>
        <div>
            <div>
                <img src={blog1} alt='study' />
                <p><a href="http://" target="_blank" rel="noopener noreferrer">Understanding the need for a domestic provider.</a></p>
            </div>
            <div>
            <img src={blog2} alt='cleaning' />
            <p><a href="http://" target="_blank" rel="noopener noreferrer"> Importance of hiring a professional cleaning service provider</a> </p>
            </div>
            <div>
            <img src={blog3} alt='glovo' />
            <p><a href="http://www.glovoapp.com" target="_blank" rel="noopener noreferrer">GLovo app is a necessity for all households for easy shopping.
            Download Glovo app today!!!</a></p>
            </div>
        </div>
    </article>
         <div className='helpCenter-section'>
          <div className='overlay'>
            <h1 className='summary-title'>Key Point...</h1>
            <p className='summary-subtitle'>1. Trusted workers.</p>
            <p className='summary-subtitle'>2. Reliable Support.</p>
            <p className='summary-subtitle'>3. Flexible Booking.</p>
          </div>
        </div>
</div>    

  )
}

export default HelpCenterBot