import { useState } from 'react';
import Vector1 from '../../images/MeetOurTeamVector1.png';
import Vector2 from '../../images/MeetOurTeamVector2.png';
import Vector3 from '../../images/MeetOurTeamVector3.png';
import SignUp from '../../images/MOT_SignUp.png';
import SetProfile from '../../images/MOT_setYourProfile.png';
import Eligibility from '../../images/MOT_VerifyEligibility.png';
import WorkPlan from '../../images/MOT_SetYourSchedule.png';
import Location from '../../images/MOT_SetYourLOcation.png';
import Jobs  from '../../images/MOT_StartGettingJObs.png';
import dialer from '../../images/helpcenter.dialer.png';
import gmail from '../../images/helpcenter.gmail.png';
const ChoreAidPage = () => {
  const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here,
        console.log("Email:", email, "Message:", message);

    };
  return (
    <div className="choreaid-page">
      {/* Contact Form */}
      <section className="contact-form">
        <h2>Say something about ChoreAid...</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Flexible Work Section */}
      <section className="flexible-work">
        <h2>Flexible work at your fingertips!</h2>
        <p>Learn more about flexible careers with ChoreAid.</p>
        <div className="features">
          <div className="feature-item">
            <img src={Vector1} alt="Become your own boss" />
            <h3>Become your own boss</h3>
            <p>Work when, and where you want. Offer services in 
              various homes and set a flexible schedule and work
              area.</p>
          </div>
          <div className="feature-item">
            <img src={Vector2} alt="Set your own rates" />
            <h3>Set your own rates</h3>
            <p>Set your own rate and get paid 100% of your
              charges paid directly to you through our
              secure payment system.</p>
          </div>
          <div className="feature-item">
            <img src={Vector3} alt="Grow your business" />
            <h3>Grow your business</h3>
            <p>We connect you with clients in your area, and ways to market yourself
              - so you can focus on what you do best.</p>
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="join-team">
        <h2>Join Our Team!</h2>
        <div className="team-steps">
          <div className="step-item">
            <img src={SignUp} alt="Sign Up" />
            <h3>Sign Up</h3>
            <p>Create your account.</p>
          </div>
          <div className="step-item">
            <img src={SetProfile} alt="Set your profile" />
            <h3>Set your Profile</h3>
            <p>Select what services you want to offer.</p>
          </div>
          <div className="step-item">
            <img src={Eligibility} alt="Verify your eligibility" />
            <h3>Verify your eligibility</h3>
            <p>Confirm your identity and submit business
              verifications, as required.</p>
          </div>
        </div>
        <div className='team-steps2'>
          <div className="step-item">
            <img src={WorkPlan} alt="Set your schedule" />
            <h3>Set your schedule</h3>
            <p>Set your weekly availability and opt in to receive
              same day jobs.</p>
          </div>
          <div className="step-item">
            <img src={Location} alt="Set your location" />
            <h3>Set your location</h3>
            <p>Set your location and also state locations that you are 
              available to work at.</p>
          </div>
          <div className="step-item">
            <img src={Jobs} alt="Start getting jobs" />
            <h3>Start getting jobs</h3>
            <p>Make money on your own terms and grow your business.</p>
          </div>
        </div>
      </section>
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
        <div className='MeetOurTeam-section'>
          <div className='overlay'>
            <h1 className='summary-title'>Key Point...</h1>
            <p className='summary-subtitle'>1. Trusted workers.</p>
            <p className='summary-subtitle'>2. Reliable Support.</p>
            <p className='summary-subtitle'>3. Flexible Booking.</p>
          </div>
        </div>
    </div>
     
  );
};

export default ChoreAidPage;
