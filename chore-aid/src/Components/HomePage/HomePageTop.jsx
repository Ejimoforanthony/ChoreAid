import React, { useState, } from 'react'
import SearchBar from '../Layout/SearchBar';
import ReadMoreComponent from '../../images/ReadMore';
import ChoreVid from '../../videos/ChoreVid.mp4';
import CleaningImage from '../../images/cleaning.jpeg';
import CookImage from '../../images/CookImage.jpeg';
import BabySitterImage from '../../images/BabySetter.jpeg';
import Errands from '../../images/Errands.jpeg';

function HomePageTop() {

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

    const data = [
      {id: 1, name: 'HomePage'},
      {id: 2, name: 'Services'},
      {id: 3, name: 'HelpCenter'},
      {id: 4, name: 'MeetOurTeam'},
    ];

    const handleSearch = (query) => {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredResults(results);
    setSearchPerformed(true);

    };

  return (
    <div>
      <section >
        <article className='intro'>
          <p className='intro-h'>Since 2024</p>
          <h1 className='intro-H'>ChoreAid, trusted platform to secure a task helper</h1>
          <p className='intro-body'>ChoreAid is a platform connecting individuals and families 
             with trusted helpers for household chores and errands.</p>
        </article>
        <video className='video' width="600" controls autoPlay muted>
          <source src={ChoreVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className='search'>
          {/* <h1>Website Search</h1> */}
          <SearchBar onSearch={handleSearch} />

          {searchPerformed && (
          <div>
             <h2>Results:</h2>
              {filteredResults.length > 0 ? (
               <ul>
             {filteredResults.map((item) => (
              <li key={item.id}>{item.name}</li>
             ))}
             </ul>
             ) : (
            <p>No results found</p>
          )}
          </div>
             )}
      </div >
          <article className='whatCA'>
            <h1>WHAT IS CHOREAID?</h1>
            <p>Due to work demands, lack of time, and other family or home chanllenges,
              some family or individual needs often go unmet. ChoreAid is a platform
              where families or individuals can connect with people who can help with
              errands and other tasks.
            </p>
          </article>
      </section>
      <section>
          <article className='services-description'>
            <h2>Our Services</h2>
            <p>We render the following domestic services to our clients</p>
          </article>

          <div className='service-item'>
            <div className='service-image'><img src={ CleaningImage} alt="CleaningChore" width={300} height={300} className='service-img'/></div>
            <article className='service-text'>
              <h2>Cleaning</h2>
              <section>
                  <ReadMoreComponent 
                  // title="Cleaning"
                  content="ChoreAid offers comprehensive cleaning services tailored to meet the diverse
                  needs of individuals and families. There is a cleaner always ready to 
                   give you that sparkling best at ChoreAid"
                 />
              </section>
            </article>
          </div>
          
          <div className='service-item2'>
             
              <article className='service-text2'>
              <h2>Cooking</h2>
              <section>
                  <ReadMoreComponent
                  //  title="Cooking"
                  content=" ChoreAid offers a flexible cooking services where customers
                   provide all neccessary ingredients, our professional cooks provide the labour
                   and expertise to prepare the meal. hygiene and perfection is our watchword. 
                   Contact us today, to access our well seasoned and professional cook"
                 />
              </section>
              </article>
              <div className='service-image2'><img src={CookImage} alt='Chef' width={300} height={300} className='service-img2'/></div>
          </div>

          <div className='service-item'>
             <div className='service-image'> <img src={BabySitterImage} alt='Babysitter' width={300} height={300} className='service-img' /></div>
              <article className='service-text'>
              <h2>Babysitting</h2>
              <section>
                  <ReadMoreComponent
                  //  title="Babysitting"
                  content="Do you require temporarily care for a child? ChoreAid provides You with care giver
                          that will take care of your children when you are unavailable due to busy schedule.
                          Be rest assured that your child is with the best hands while you go about you business."
                       />
              </section>
              </article>
          </div>

          <div className='service-item2'>
          
            <article className='service-text2'>
              <h2>Errands</h2>
              <section>
                  <ReadMoreComponent
                  //  title="Errands"
                  content="ChoreAid provides You with professionals that will help you run
                  errands such as grocery shopping, parcel pick up, etc"
                 />
              </section>
            </article>
            <div className='service-image2'><img src={Errands} alt="Errand boy" width={300} height={300} className='service-img2'/></div>
          </div>

      </section>
    </div>
  )
}

export default HomePageTop