
import Cook from '../../images/service.cooking.jpeg';
import BabySitter from '../../images/service.babysitting.jpeg';
import Errand from '../../images/service.errand.jpeg';
import Cleaner from '../../images/service.cleaning.jpeg';

const serviceMid = () => {
  return (
    <div>
        <section className='service-cook'>
      <div className='service-cook-Image'>
           <img src={Cleaner} alt='cleaner on duty' className='service-cook-Image-Img'/>
      </div>
      <div className='service-cook-Describe'>
           <h1>Cleaning</h1>
           <p>ChoreAid offers comprehensive cleaning services tailored to
              meet the diverse needs of individuals and families. The
              cleaning services id divided into two distinct sections to 
              provide flexibility and convenience for our customers:
           </p>
           <h2>1. Professional Cleaning Service</h2>
           <h2>2. AssistKlin Cleaning Services</h2>
      </div>
    </section>
    <article className='service-cooking'>
      <div>
        <h2>Professional Cleaning Service</h2>
        <h3>Description:</h3>
        <p>ChoreAid provides both the cleaning tools and the cleaning 
          services. This option is ideal for customers who want a hassle-free
          experience where everything is taken care of by our professional cleaners.
        </p>
        <h3>Features:</h3>
        <p>-Thorough cleaning of all designated areas.<br></br>
           -Suitable for customers who prefer not to handle cleaning 
           logistics.<br></br>
           -High-quality, eco-friendly cleaning products used.
        </p>
      </div>
      <div>
        <h2>AssistKlin Cleaning Service</h2>
        <h3>Description:</h3>
        <p>Customers provide the cleaning tools, and ChoreAid provides the cleaning services.
           This option is cost effective and covenient for customers who already have cleaning
           supplies and equipments at home.
        </p>
        <h3>Features:</h3>
        <p>
          -Professional cleaning service performed by choreAid cleaners.<br></br>
          -Flexible and budget-friendly option.<br></br>
          -Suitable for customers who prefer using their own cleaning products
        </p>
      </div>
      <div>
        <h2>Accomodation Types</h2>
        <p>
          Self-contained, One Bedroom, Two Bedroom, Three Bedroom, Four Bedroom and Above<br></br>
          ChoreAid will provide the following services
        </p>
        <h3>i. General Cleaning</h3>
        <h3>ii Fumigation</h3>
      </div>
    </article>
            <section className='service-cook'>
        <div className='service-cook-Image'>
            <img src={Cook} alt='cook on duty' className='service-cook-Image-Img' />
        </div>
        <div className='service-cook-Describe'> 
            <h1>Cooking</h1>
            <p>ChoreAid offers a flexible cooking service where customers
                provide all neccessary ingredients, and our professional cooks
                provide the lobor and expertise to prepare the meals.
            </p>
            <h2>1. Meal Preparation</h2>
            <h2>2. Specialty Cooking</h2>
        </div>
        </section>

        <article className='service-cooking'>
        <div>
            <h2>1. Meal Preparation</h2>
            <p>ChoreAid offers three tiers of meal preparation services,
            each tailored to different needs and serving sizes.
            </p>
            <h3>i. Basic Meal:</h3>
            <p>Description: Preparation of one dish serving 1-2 people.</p>
            <h3>Features:</h3>
            <p>-Ideal for small meals or individual servings.<br></br>
            -Quick and efficient meal preparation.<br></br>
            </p>
        </div>
        <div>
            <h2>2. Specialty Cooking</h2>
            <p>Chore_Aid provides specialty cooking services for unique culinary
            needs and preferences
            </p>
            <h3>i. BBQ and Qrill</h3>
            <p>Description: Expert preparation of BBQ and grilled dishes.</p>
            <h3>Features:</h3>
            <p>-Ideal for outdoor events and gatherings.<br></br>
            -Professional grilling techniques.<br></br>
            </p>
        </div>
        <div>
            <h2>Large Cooking</h2>
            <p>
            Chore_Aid offers cooking services for larger groups and events, 
            ensuring everyone is well-fed with delicious meals
            </p>
            <h3>i. 10-20 People</h3>
            <h3>Description: Preparation of meals serving 10-20 people.</h3>
            <p>-Suitable for medium-sized gatherings and events.<br></br>
            -Efficient and large-scale meal preparation.<br></br>
            </p>
        </div>
        </article>

        <section className='Service-Errand'>
        <div className='Service-Errand-Image'>
            <img src={BabySitter} alt='Baby Sitter on duty' className='Service-Errand-Image-Img'/>
        </div>
        <div className='Service-Errand-Describe'>
            <h1>BabySitting</h1>
            <p>-Professional babysitting services for children of all ages. </p>
            <p>-Activities to engage and entertain children.</p>
            <p>-BAsic children tasks such as feeding, diaper changing, and ensuring safety.</p>
        </div>
        </section>

        <section className='Service-Errand'>
        <div className='Service-Errand-Image'>
            <img src={Errand} alt='Running Errands' className='Service-Errand-Image-Img' />
        </div>
        <div className='Service-Errand-Describe'>
        <h1>Errand Running</h1>
            <p>-Running various errands including grocery<br></br>
            shopping, picking up prescriptions, and other<br></br>
            personal tasks. </p>
            <p>-Timely and efficient execution of errands as per <br></br>
            customer requests.</p>
        </div>
        </section>
    </div>
  )
}

export default serviceMid