import SearchBar from '../Layout/SearchBar';
// import ReadMoreComponent from '../../images/ReadMore';
import ChoreVid from '../../images/bg-home.png';
import CleaningImage from '../../images/cleaning.jpeg';
import CookImage from '../../images/CookImage.jpeg';
import BabySitterImage from '../../images/BabySetter.jpeg';
import Errands from '../../images/Errands.jpeg';

function HomePageTop() {
  // const [filteredResults, setFilteredResults] = useState([]);
  // const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = () => {
  };

  return (
    <div className="p-4">
      <section className="mb-8 pt-16">
        {/* first section of the page  */}
          <article className="text-center my-8">
            <p className="text-xl font-light">Since 2024</p>
            <h1 className="md:text-5xl text-4xl font-[900] leading-tight text-[#002A42]">
              ChoreAid, trusted platform to
              <br />
              secure a task helper
            </h1>
            <p className="text-lg mt-2 leading-tight">
              ChoreAid is a platform connecting individuals and families
              <br />
              with trusted helpers for household chores and errands.
            </p>
            <img className="w-full  mx-auto mt-6 md:h-[400px] h-64 object-cover" src={ChoreVid} alt="ChoreAid Video" />
          </article>

          {/* end of the section  */}
      
      {/* the  search section of the page  */}
      <div className="my-4  p-4 rounded-lg flex flex-col lg:flex-row items-center justify-center lg:space-x-4">
          <div className="flex-1 mb-4 lg:mb-0 flex items-center">
            <SearchBar onSearch={handleSearch} className="w-full" />
          </div>
          <button className="bg-[#002A42] text-white px-6 py-3 rounded-lg hover:bg-[#004057] transition-colors h-full">
            Book Our Services
          </button>
        </div>
        {/* end of the search section  */}

        <article className="text-center my-8">
          <h1 className="text-3xl font-[850] leading-tight">
            WHAT IS CHOREAID?
          </h1>
          <p className="mt-2 leading-tight">
            Due to work demands, lack of time, and other family or home challenges, some family or individual needs often go unmet.
            <br />
            ChoreAid is a platform where families or individuals can connect with people who can help with errands and other tasks.
          </p>
        </article>
      </section>
      <section>
        <article className="text-center mb-4">
          <h2 className="text-2xl font-[850]">Our Services</h2>
          <p className="mt-2">We render the following domestic services to our clients</p>
        </article>

        <div className="flex justify-center  py-8">
        <div className="grid grid-cols-1 gap-8 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center  rounded-lg p-4 ">
            <img src={CleaningImage} alt="Cleaning Chore" className="w-full md:w-1/2 h-64 object-cover rounded-md" />
            <div className="md:ml-4 mt-4 md:mt-0 w-full">
              <h2 className="text-xl font-bold">Cleaning</h2>
              <p className="mt-2 text-gray-700">ChoreAid offers comprehensive cleaning services tailored to meet the diverse needs of individuals and families. There is a cleaner always ready to give you that sparkling best at ChoreAid.</p>
              <button className="mt-2 text-blue-600 hover:underline">Read more</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center  rounded-lg p-4 ">
            <img src={CookImage} alt="Chef" className="w-full md:w-1/2 h-64 object-cover rounded-md" />
            <div className="md:mr-4 mt-4 md:mt-0 w-full">
              <h2 className="text-xl font-bold">Cooking</h2>
              <p className="mt-2 text-gray-700">ChoreAid offers flexible cooking services where customers provide all necessary ingredients, our professional cooks provide the labour and expertise to prepare the meal. Hygiene and perfection are our watchwords.</p>
              <button className="mt-2 text-blue-600 hover:underline">Read more</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center  rounded-lg p-4 ">
            <img src={BabySitterImage} alt="Babysitter" className="w-full md:w-1/2 h-64 object-cover rounded-md" />
            <div className="md:ml-4 mt-4 md:mt-0 w-full">
              <h2 className="text-xl font-bold">Babysitting</h2>
              <p className="mt-2 text-gray-700">Do you require temporary care for a child? ChoreAid provides you with caregivers that will take care of your children when you are unavailable due to a busy schedule.</p>
              <button className="mt-2 text-blue-600 hover:underline">Read more</button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center  rounded-lg p-4 ">
            <img src={Errands} alt="Errand boy" className="w-full md:w-1/2 h-64 object-cover rounded-md" />
            <div className="md:mr-4 mt-4 md:mt-0 w-full">
              <h2 className="text-xl font-bold">Errands</h2>
              <p className="mt-2 text-gray-700">ChoreAid provides you with professionals that will help you run errands such as grocery shopping, parcel pick up, etc.</p>
              <button className="mt-2 text-blue-600 hover:underline">Read more</button>
            </div>
          </div>
        </div>
      </div>

      </section>
    </div>
  );
}

export default HomePageTop;
