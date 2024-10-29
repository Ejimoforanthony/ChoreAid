import StarRating from './StarRating';
// import SeeMoreComponent from './SeeMore';
import Faith from '../../images/FaithIgwe.jpeg';
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
 
  return (
    <div className="p-8 bg-white">
      <article className="text-center mb-8">
        <h2 className="text-3xl font-bold">Meet Our Team</h2>
        <p className="mt-2 text-gray-700">
          ChoreAid is packed with core professionals who are dedicated to providing
          excellent results to meet customer needs.
        </p>
      </article>

      <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg">
          <img src={Faith} alt="Faith Igwe" className="w-24 h-24 rounded-full mb-4" />
          <h2 className="text-lg font-semibold">Faith Igwe</h2>
          <p className="text-gray-600">A professional babysitter, dedicated and hardworking</p>
          <p className="mt-2 font-bold text-blue-500">20,000 NGN Per hour</p>
          <StarRating />
        </div>

        <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg">
          <img src={Micheal} alt="Micheal Ngah" className="w-24 h-24 rounded-full mb-4" />
          <h2 className="text-lg font-semibold">Micheal Ngah</h2>
          <p className="text-gray-600">A professional chef, dedicated and hardworking</p>
          <p className="mt-2 font-bold text-blue-500">30,000 NGN Per hour</p>
          <StarRating />
        </div>

        <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg">
          <img src={Isaac} alt="Isaac Aliu" className="w-24 h-24 rounded-full mb-4" />
          <h2 className="text-lg font-semibold">Isaac Aliu</h2>
          <p className="text-gray-600">A trusted cleaner, dedicated and hardworking</p>
          <p className="mt-2 font-bold text-blue-500">10,000 NGN Per hour</p>
          <StarRating />
        </div>
      </section>

      {/* See More Slider */}
      <div className="my-8 overflow-x-auto flex space-x-8">
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg min-w-[250px]">
          <img src={Sandra} alt="Sandra Ikem" className="w-24 h-24 rounded-full mb-4" />
          <h2 className="text-lg font-semibold">Sandra Ikem</h2>
          <p className="text-gray-600">A nurse and babysitter, dedicated and hardworking</p>
          <p className="mt-2 font-bold text-blue-500">25,000 NGN Per hour</p>
          <StarRating />
        </div>
      </div>

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
      <section className="text-center my-8">
        <h2 className="text-2xl font-semibold">What our clients are saying about us!</h2>
        <div className="grid gap-y-10 md:gap-y-0 mt-4 sm:grid-cols-1 md:grid-cols-2">
          <article className="flex flex-col  p-6 border rounded-lg shadow-lg w-72 h-48 mx-auto bg-gray-100">
            <img src={John} alt="John Benedict" className="w-12 h-12 rounded-md mb-2" />
            <p className="text-gray-700 text-center">They were responsive and always followed up to ensure our satisfaction.</p>
            <h3 className="font-semibold mt-2">John Benedict</h3>
          </article>

          <article className="flex flex-col  p-6 border rounded-lg shadow-lg w-72 h-48 mx-auto bg-gray-100">
            <img src={Elizabeth} alt="Elizabeth Micheal" className="w-12 h-12 rounded-md mb-2" />
            <p className="text-gray-700 text-center">It's no exaggeration to say that I was lost before I found ChoreAid.</p>
            <h3 className="font-semibold mt-2">Elizabeth Micheal</h3>
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

      <section className="relative bg-gray-800 text-white p-8">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-3xl font-bold relative z-10">Key Points</h1>
        <p className="mt-2 relative z-10">1. Trusted workers</p>
        <p className="relative z-10">2. Flexible Booking</p>
        <p className="relative z-10">3. Reliable Support</p>
      </section>
    </div>
  );
};

export default HomePageBot;
