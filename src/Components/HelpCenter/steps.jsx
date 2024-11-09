
import user1 from '../../images/user1.png';
import user2 from '../../images/User2.png';
import user3 from '../../images/user3.png';
import worker1 from '../../images/worker1.png';
import worker2 from '../../images/worker2.png';
import worker3 from '../../images/worker3.png';
const HowItWorks = () => {
    return(
        <div className='HowItWorks'>
       <h1>How It Works</h1>
       <section className='HowItWorks-users'>
            <div>
                <h1>USERS:</h1>
            </div>
            <article>
                 <div>
                  <img src={user1} alt='logo'/>
                   <p>Search for any domestic service, and We will
                    find trusted providers close to your location.
                   </p>
                 </div>
                 <div>
                 <img src={user2} alt='logo'/>
                   <p>You pick one of the listed providers, take a moment
                    to view their profile to be sure their rate suits your
                    budget and book for the service.
                   </p>
                 </div>
                 <div>
                 <img src={user3} alt='logo'/>
                   <p>Your assigned service provider arrives at your location,
                    and gets your job done!
                   </p>
                 </div>
            </article>
        </section>

        <section className='HowItWorks-users'>
            <div>
                <h1>WORKERS:</h1>
            </div>
            <article>
                 <div>
                  <img src={worker1} alt='logo'/>
                   <p>Sign Up on ChoreAid as a provider, and submit all required
                    information and documents.
                    
                   </p>
                 </div>
                 <div>
                 <img src={worker2} alt='logo'/>
                   <p>ChoreAid would list you as provider for the service you
                    offer and users around you can request your service.
                   </p>
                 </div>
                 <div>
                 <img src={worker3} alt='logo'/>
                   <p>Accept users requests and proceed with completing their
                    jobs and getting paid!
                   </p>
                 </div>
            </article>
        </section>
  </div>
    )
};

export default HowItWorks;
