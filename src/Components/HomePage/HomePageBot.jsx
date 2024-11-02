// import StarRating from './StarRating';
// import SeeMoreComponent from './SeeMore';
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
import Slider from './teamSlider';

const HomePageBot = () => {
 
  return (
    <div className="p-8 bg-white">
      <article className="text-center mb-8">
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <p className="mt-2 text-gray-700">
          ChoreAid is packed with core professionals who are dedicated to providing
          excellent results to meet customer needs.
        </p>
      </article>

      <Slider />

      {/* Statistics Section with Borders */}
      <section className="flex justify-around gap-4 sm:gap-6 my-8 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center border rounded-lg p-4 w-32 sm:w-40 md:w-48 h-24 sm:h-18 md:h-28 flex flex-col justify-center items-center bg-white hover:shadow-md transition-all duration-200">
          <p className="text-2xl sm:text-3xl font-bold text-[#028DDB]">100+</p>
          <p className="text-gray-600 mt-2">Workers</p>
        </div>
        <div className="text-center border rounded-lg p-4 w-32 sm:w-40 md:w-48 h-24 sm:h-18 md:h-28 flex flex-col justify-center items-center bg-white hover:shadow-md transition-all duration-200">
          <p className="text-2xl sm:text-3xl font-bold text-[#028DDB]">300+</p>
          <p className="text-gray-600 mt-2">Clients</p>
        </div>
        <div className="text-center border rounded-lg p-4 w-32 sm:w-40 md:w-48 h-24 sm:h-18 md:h-28 flex flex-col justify-center items-center bg-white hover:shadow-md transition-all duration-200">
          <p className="text-2xl sm:text-3xl font-bold text-[#028DDB]">200+</p>
          <p className="text-gray-600 mt-2">Reviews</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="my-8 px-4">
          <h2 className="text-2xl font-semibold text-center">What our clients are saying about us!</h2>
          <div className="grid gap-y-6 max-w-2xl mx-auto md:gap-x-6 mt-4 sm:grid-cols-1 md:grid-cols-2 justify-center pt-6">
            <article className="flex flex-col p-6 border rounded-lg shadow-lg w-80 h-52 mx-auto bg-gray-100">
              <img src={John} alt="John Benedict" className="w-12 h-12 rounded-md mb-3" />
              <p className="text-gray-700 text-center">They were responsive and always followed up to ensure our satisfaction.</p>
              <h3 className="font-semibold mt-3">John Benedict</h3>
            </article>

            <article className="flex flex-col p-6 border rounded-lg shadow-lg w-80 h-52 mx-auto bg-gray-100">
              <img src={Elizabeth} alt="Elizabeth Micheal" className="w-12 h-12 rounded-md mb-3" />
              <p className="text-gray-700 text-center">It's no exaggeration to say that I was lost before I found ChoreAid.</p>
              <h3 className="font-semibold mt-3">Elizabeth Micheal</h3>
            </article>
          </div>
        </section>



      {/* Partners and Projects Sections */}
      <section className="text-center my-8">
        <h2 className="text-2xl font-semibold mb-4">Our Partners</h2>
        <div className="flex justify-center flex-wrap space-x-8 mb-8">
          <img src={Google} alt="Google" className="w-32 h-32" />
          <img src={PayPal} alt="PayPal" className="w-32 h-32" />
          <img src={Glovo} alt="Glovo" className="w-32 h-32" />
          <img src={stripe} alt="Stripe" className="w-32 h-32" />
        </div>
        <h2 className="text-2xl font-semibold">Popular Projects</h2>

        <div className="flex flex-wrap justify-center mt-4">
          <div className="flex-shrink-0 w-full md:w-1/4 p-2">
            <img src={SliderErrand} alt="Errand Boy" className="w-full" />
            <h3 className="text-lg font-semibold">Errand</h3>
            <p className="text-gray-600">Project completed at NGN80,000</p>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/4 p-2">
            <img src={SliderBabysitter} alt="Baby sitter" className="w-full" />
            <h3 className="text-lg font-semibold">Babysitting</h3>
            <p className="text-gray-600">Project completed at NGN50,000</p>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/4 p-2">
            <img src={SliderCooking} alt="Cooking" className="w-full" />
            <h3 className="text-lg font-semibold">Cooking</h3>
            <p className="text-gray-600">Project completed at NGN50,000</p>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/4 p-2">
            <img src={SliderCleaning} alt="Cleaning" className="w-full" />
            <h3 className="text-lg font-semibold">Cleaning</h3>
            <p className="text-gray-600">Project completed at NGN100,000</p>
          </div>
        </div>
      </section>

      <section className="bg-home h-[450px] bg-center bg-cover text-white text-center">
        <div className="relative top-1/2 transform -translate-y-1/2">
          <h1 className="text-4xl font-bold mb-4">Key Points</h1>
          <p className="mt-2 text-2xl font-bold">1. Trusted workers</p>
          <p className="text-2xl font-bold">2. Flexible Booking</p>
          <p className="text-2xl font-bold">3. Reliable Support</p>
        </div>
      </section>

    </div>
  );
};

export default HomePageBot;
