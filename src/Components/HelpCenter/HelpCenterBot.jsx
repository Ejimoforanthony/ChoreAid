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
        <section className="bg-[#D8F0FE] py-16 reach">
            <h1 className="font-[cabinet-grotesk] font-extrabold text-4xl leading-[55.8px] text-[#002A42] text-center mb-16">
                Reach out to Us!!!
            </h1>
            <div className="flex flex-col-reverse lg:flex-row justify-between items-center reach-out">
                <div className="flex flex-col justify-center mb-10 lg:mb-0 lg:ml-24">
                    <p className="font-[cabinet-grotesk] font-medium text-2xl leading-[31px] flex items-center gap-5 pb-8">
                        <img src={dialer} alt="dial" className="w-6" />
                        <a
                            href="tel:+234764564535"
                            target="_blank"
                            title="Give Us a Call"
                            rel="noopener noreferrer"
                            className="text-[#01121b] hover:underline"
                        >
                            +234 7064654335
                        </a>
                    </p>
                    <p className="font-[cabinet-grotesk] font-medium text-2xl leading-[31px] flex items-center gap-5 pb-8">
                        <img src={gmail} alt="email" className="w-6" />
                        <a
                            href="mailto:choreaid@gmail.com"
                            target="_blank"
                            title="Email"
                            rel="noopener noreferrer"
                            className="text-[#01121b] hover:underline"
                        >
                            choreaid@gmail.com
                        </a>
                    </p>
                </div>
                <form
                    className="w-full max-w-lg flex flex-col gap-4 px-4 lg:mr-28 reachout-form"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-gray-800 font-medium mb-2"
                        >
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email"
                            required
                            className="w-full px-4 py-3  border rounded-[10px] border-gray-300 bg-[#006299] text-white focus:outline-none"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-gray-800 font-medium mb-2"
                        >
                            Message:
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message"
                            required
                            className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-[#006299] text-white focus:outline-none min-h-[150px]"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-6 bg-[#028DDB] text-white rounded-lg text-lg mx-auto lg:ml-auto hover:bg-[#0056b3] transition duration-300 w-full "
                    >
                        Send Message
                    </button>
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