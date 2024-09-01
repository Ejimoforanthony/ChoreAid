import React from 'react'
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


const track = document.querySelector('.carousel-track');
const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

let currentIndex = 0;

// Arrange the slides next to one another
slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
};

const updateCurrentIndex = (increment) => {
    currentIndex += increment;
    if (currentIndex < 0) {
        currentIndex = slides.length - 4; // Loop back to the last full set
    } else if (currentIndex > slides.length - 4) {
        currentIndex = 0; // Loop back to the start
    }
};

leftButton.addEventListener('click', () => {
    updateCurrentIndex(-1);
    moveToSlide(track, slides[currentIndex], slides[currentIndex]);
});

rightButton.addEventListener('click', () => {
    updateCurrentIndex(1);
    moveToSlide(track, slides[currentIndex], slides[currentIndex]);
});


const HomePageBot = () => {
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
             <p>300 + Clients</p>
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
            
            <div class="carousel-container">
                <div class="carousel-track">
                    <div class="carousel-item"><img src={SliderErrand} alt="Errand Boy"/></div>
                    <div class="carousel-item"><img src={SliderBabysitter} alt="Baby sitter"/></div>
                    <div class="carousel-item"><img src={SliderCooking} alt="cook"/></div>
                    <div class="carousel-item"><img src={SliderCleaning} alt="Cleaner"/></div>
                    <div class="carousel-item"><img src={SliderErrand} alt="Errand Boy"/></div>
                </div>
                <button class="carousel-btn left-btn">←</button>
                <button class="carousel-btn right-btn">→</button>
            </div>


      <div className='hero-section'>
         <div className='overlay'>
             <h1 className='hero-title'>Key Points</h1>
             <p className='hero-subtitle'>1. Trusted workers</p>
             <p className='hero-subtitle'>3. Flexible Booking</p>
             <p className='hero-subtitle'>2. Reliable Support</p>
         </div>
      </div>
     </section>
    </div>
  )
}

export default HomePageBot