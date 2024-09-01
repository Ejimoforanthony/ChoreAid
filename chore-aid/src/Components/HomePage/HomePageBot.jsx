import React, { useEffect, useRef, useState } from 'react'
import StarRating from './StarRating';
import SeeMoreComponent from './SeeMore';
import Faith from '../../images/FaithIgwe.jpeg' ;
import Micheal from '../../images/MichealNgah.jpeg';
import Isaac from '../../images/IsaacAliu.jpeg';
import Sandra from '../../images/SandraIkem.jpeg';
import John from '../../images/John Benedict.jpeg';
import Elizabeth from '../../images/Elizabeth Micheal.jpeg';
import Google from '../../images/google.png';
import PayPal from '../../images/PayPal.png';
import Glovo from '../../images/Glovo.png';
import stripe from '../../images/Stripe.png';
import SliderErrand from '../../images/slider.Errands.jpeg';
import SliderBabysitter from '../../images/slider.babysitter.jpeg';
import SliderCooking from '../../images/slider.cooking.jpeg';
import SliderCleaning from '../../images/cleaning.jpeg';


const HomePageBot = () => {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const track = trackRef.current;
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    });

    const moveToSlide = (targetIndex) => {
      const targetSlide = slides[targetIndex];
      track.style.transform = `translateX(-${targetSlide.style.left})`;
      setCurrentIndex(targetIndex);
    };

    const handleLeftClick = () => {
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = slides.length - 4;
      }
      moveToSlide(newIndex);
    };

    const handleRightClick = () => {
      let newIndex = currentIndex + 1;
      if (newIndex > slides.length - 4) {
        newIndex = 0;
      }
      moveToSlide(newIndex);
    };

    const leftButton = document.querySelector('.left-btn');
    const rightButton = document.querySelector('.right-btn');

    leftButton.addEventListener('click', handleLeftClick);
    rightButton.addEventListener('click', handleRightClick);

    return () => {
      leftButton.removeEventListener('click', handleLeftClick);
      rightButton.removeEventListener('click', handleRightClick);
    };
  }, [currentIndex]);
  return (
    <div className='meet-our-team'>
        <article className='intro-section'>
           <h2>Meet Our Team</h2>
           <p>ChoreAid is packed with core professionals who are dedicated to providing
              excellent results to meeting customers needs </p>
        </article>
        
        <section className='team-section'>
          <div className='team-member'>
             <div><img src={Faith} alt='Faith Igwe' width={100} height={100} className='profile-pic' /></div> 
              <article>
                <h2>Faith Igwe</h2>
                <p>A professional babysitter, dedicated and hardworking</p>
                <p className='price'>20,000 NGN Per hour</p>
              </article>
              <div className="rating">
                <StarRating />
              </div>
          </div>

          <div className='team-member'>
              <img src={Micheal} alt='Micheal Ngah' width={100} height={100} className='profile-pic'/>
              <article>
                <h2>Micheal Ngah</h2>
                <p>A professional chef, dedicated and hardworking</p>
                <p className='price'>30,000 NGN Per hour</p>
              </article>
              <div className="rating">
                <StarRating />
              </div>
          </div>

          <div className='team-member'>
              <img src={Isaac} alt='Isaac Aliu' width={100} height={100} className='profile-pic' />
              <article>
                <h2>Isaac Aliu</h2>
                <p>A trusted cleaner, dedicated and hardworking</p>
                <p className='price'>10,000 NGN Per hour</p>
              </article>
              <div className="rating">
                <StarRating />
              </div>
          </div>
        </section>

        <div className='extra-member'>
          <SeeMoreComponent
           article={
           <article className='extra-member-article'>
             <img src={Sandra} alt="Sandra Ikem" width={100} height={100} className='profile-pic'/>
             <h1>Sandra Ikem</h1>
             <p>A Nurse and baby sitter. dedicated and hardworking </p>
             <p className='price'>25,000 NGN Per hour </p>
              <div className='rating'>
                <StarRating />
              </div>
           </article>
            }
           />
        </div>

        <section className='stats'>
           <div className='stat-item'>
             <p>100 + Workers</p>
           </div>
           <div className='stat-item'>
             <p>300 + <br></br> Clients</p>
           </div>
           <div className='stat-item'> 
             <p>200 + Reviews</p>
           </div>
        </section>

    <section className='reviews-section'>
        <h1>What they are saying about ChoreAid!!!</h1>
     <div className='reviews-container'>
          <article className='review-card' >
              <img src={John} alt='John Benedict' width={50} height={50} className='review-image' />
              <p>They were responsive and always did their best to follow
                up with us to ensure that the work was done to our satisfaction.
              </p>
              <h3>John Benedict</h3>
          </article>
          <article className='review-card'>
              <img src={Elizabeth} alt='Elizabeth Micheal' width={50} height={50} className='review-image' />
              <p>It's no exaggeration to say that i was lost before I found ChoreAid.
                 I can recommend them wholeheartedly
              </p>
              <h3>Elizabeth Micheal</h3>
          </article>
        </div>
           {/* <div>
             <SeeMoreComponent 
             article={
             <article className='review-card-extra'>
               <img src={John} alt="John Benedict" width={50} height={50} className='review-image' />
               <p>Professional and patient staffs. ChoreAid will always come to your Aid  </p>
                <h1>John Benedict</h1>
             </article>
              }
             />
           </div> */}
     </section>

     <section>
        <h2 className='partners'>Our Partners</h2>
        <div className='partnership'>
          <img src={Google} alt='google' />
          <img src={PayPal} alt='PayPal' />
          <img src={Glovo} alt='Glovo' />
          <img src={stripe} alt='stripe' />
        </div>
        <h2 className='popular'>Popular Projects</h2>
        
        <div className="carousel-container">
          <div className="carousel-track" ref={trackRef}>
            <div className="carousel-item">
              <img src={SliderErrand} alt="Errand Boy"/>
              <h1>Errand</h1>
              <p>Project completed at NGN80,000</p>
              </div>
            <div className="carousel-item">
              <img src={SliderBabysitter} alt="Baby sitter"/>
              <h1>Baby Sitting</h1>
              <p>Project completed at NGN50,000</p>
              </div>
            <div className="carousel-item">
              <img src={SliderCooking} alt="cook"/>
              <h1>Cooking</h1>
              <p>Project completed at NGN 50,000</p>
              </div>
            <div className="carousel-item">
              <img src={SliderCleaning} alt="Cleaner"/>
              <h1>Cleaning</h1>
              <p>Project completed at NGN 100,000</p>
            </div>
            <div className="carousel-item">
              <img src={SliderErrand} alt="Errand Boy"/>
              <h1>Errand</h1>
              <p>Project completed with NGN80,000</p>
              </div>
          </div>
          <button className="carousel-btn left-btn">←</button>
          <button className="carousel-btn right-btn">→</button>
        </div>
        
        <div className='hero-section'>
          <div className='overlay'>
            <h1 className='hero-title'>Key Points</h1>
            <p className='hero-subtitle'>1. Trusted workers</p>
            <p className='hero-subtitle'>2. Flexible Booking</p>
            <p className='hero-subtitle'>3. Reliable Support</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePageBot;