import Cook from '../../images/service.cooking.jpeg';
import BabySitter from '../../images/service.babysitting.jpeg';
import Errand from '../../images/service.errand.jpeg';
import Cleaner from '../../images/service.cleaning.jpeg';

const ServiceMid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cleaning Section */}
      <section className="flex flex-col lg:flex-row mx-4 lg:mx-20 gap-8 lg:gap-16 my-10 lg:my-20">
        <div className="flex-1">
          <img src={Cleaner} alt="cleaner on duty" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="flex-1">
          <h1 className="font-extrabold text-3xl lg:text-4xl leading-snug text-[#002A42] underline py-4 lg:py-6 font-sans">Cleaning</h1>
          <p className="font-light text-lg lg:text-xl leading-relaxed tracking-wide pb-6 lg:pb-10">
            ChoreAid offers comprehensive cleaning services tailored to meet the diverse needs of individuals and families. The cleaning services are divided into two distinct sections to provide flexibility and convenience for our customers:
          </p>
          <h2 className="font-extrabold text-xl leading-snug text-[#002A42] pb-3 lg:pb-5">1. Professional Cleaning Service</h2>
          <h2 className="font-extrabold text-xl leading-snug text-[#002A42] pb-3 lg:pb-5">2. AssistKlin Cleaning Services</h2>
        </div>
      </section>

      {/* Professional Cleaning Service Details */}
      <article className="mx-4 lg:mx-20">
        <div className="grid gap-8 lg:gap-10">
          <div>
            <h2 className="pt-8 lg:pt-16 text-[#002A42] font-light text-xl lg:text-2xl">Professional Cleaning Service</h2>
            <h3 className="font-light text-lg lg:text-xl text-[#002A42]">Description:</h3>
            <p className="text-base lg:text-xl text-[#002A42]">
              ChoreAid provides both the cleaning tools and the cleaning services. This option is ideal for customers who want a hassle-free experience where everything is taken care of by our professional cleaners.
            </p>
            <h3 className="font-light text-lg lg:text-xl text-[#002A42]">Features:</h3>
            <p className="text-base lg:text-xl text-[#002A42]">
              - Thorough cleaning of all designated areas.<br />
              - Suitable for customers who prefer not to handle cleaning logistics.<br />
              - High-quality, eco-friendly cleaning products used.
            </p>
          </div>
          <div>
            <h2 className="pt-8 lg:pt-16 text-[#002A42] font-light text-xl lg:text-2xl">AssistKlin Cleaning Service</h2>
            <h3 className="font-light text-lg lg:text-xl text-[#002A42]">Description:</h3>
            <p className="text-base lg:text-xl text-[#002A42]">
              Customers provide the cleaning tools, and ChoreAid provides the cleaning services. This option is cost-effective and convenient for customers who already have cleaning supplies and equipment at home.
            </p>
            <h3 className="font-light text-lg lg:text-xl text-[#002A42]">Features:</h3>
            <p className="text-base lg:text-xl text-[#002A42]">
              - Professional cleaning service performed by ChoreAid cleaners.<br />
              - Flexible and budget-friendly option.<br />
              - Suitable for customers who prefer using their own cleaning products.
            </p>
          </div>
          <div>
            <h2 className="pt-8 lg:pt-16 text-[#002A42] font-light text-xl lg:text-2xl">Accommodation Types</h2>
            <p className="text-base lg:text-xl text-[#002A42]">
              Self-contained, One Bedroom, Two Bedroom, Three Bedroom, Four Bedroom and Above<br />
              ChoreAid will provide the following services:
            </p>
            <h3 className="font-light text-lg lg:text-xl text-[#002A42]">i. General Cleaning</h3>
            <h3 className="font-light text-lg lg:text-xl text-[#002A42]">ii. Fumigation</h3>
          </div>
        </div>
      </article>

      {/* Cooking Section */}
      <section className="flex flex-col lg:flex-row mx-4 lg:mx-20 gap-8 lg:gap-16 my-10 lg:my-20">
        <div className="flex-1">
          <img src={Cook} alt="cook on duty" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="flex-1">
          <h1 className="font-extrabold text-3xl lg:text-4xl leading-snug text-[#002A42] underline py-4 lg:py-6 font-sans">Cooking</h1>
          <p className="font-light text-lg lg:text-xl leading-relaxed tracking-wide pb-6 lg:pb-10">
            ChoreAid offers a flexible cooking service where customers provide all necessary ingredients, and our professional cooks provide the labor and expertise to prepare the meals.
          </p>
          <h2 className="font-extrabold text-xl leading-snug text-[#002A42] pb-3 lg:pb-5">1. Meal Preparation</h2>
          <h2 className="font-extrabold text-xl leading-snug text-[#002A42] pb-3 lg:pb-5">2. Specialty Cooking</h2>
        </div>
      </section>

      {/* Meal Preparation Details */}
      <article className="mx-4 lg:mx-20">
        <div className="grid gap-8 lg:gap-10">
          <div>
            <h2 className="pt-8 lg:pt-16 text-[#002A42] font-light text-xl lg:text-2xl">1. Meal Preparation</h2>
            <p className="text-base lg:text-xl text-[#002A42]">
              ChoreAid offers three tiers of meal preparation services, each tailored to different needs and serving sizes.
            </p>
            <h3 className="font-light text-lg lg:text-xl text-[#002A42]">i. Basic Meal:</h3>
            <p className="text-base lg:text-xl text-[#002A42]">Description: Preparation of one dish serving 1-2 people.</p>
            <h3 className="font-light text-lg lg:text-xl text-[#002A42]">Features:</h3>
            <p className="text-base lg:text-xl text-[#002A42]">
              - Ideal for small meals or individual servings.<br />
              - Quick and efficient meal preparation.
            </p>
          </div>
          <div>
            <h2 className="pt-8 lg:pt-16 text-[#002A42] font-light text-xl lg:text-2xl">2. Specialty Cooking</h2>
            <p className="text-base lg:text-xl text-[#002A42]">
              ChoreAid provides specialty cooking services for unique culinary needs and preferences.
            </p>
            <h3 className="font-light text-lg lg:text-xl text-[#002A42]">i. BBQ and Grill</h3>
            <p className="text-base lg:text-xl text-[#002A42]">Description: Expert preparation of BBQ and grilled dishes.</p>
            <h3 className="font-light text-lg lg:text-xl text-[#002A42]">Features:</h3>
            <p className="text-base lg:text-xl text-[#002A42]">
              - Ideal for outdoor events and gatherings.<br />
              - Professional grilling techniques.
            </p>
          </div>
          <div>
            <h2 className="pt-8 lg:pt-16 text-[#002A42] font-light text-xl lg:text-2xl">Large Cooking</h2>
            <p className="text-base lg:text-xl text-[#002A42]">
              ChoreAid offers cooking services for larger groups and events, ensuring everyone is well-fed with delicious meals.
            </p>
            <h3 className="font-light text-lg lg:text-xl text-[#002A42]">i. 10-20 People</h3>
            <p className="text-base lg:text-xl text-[#002A42]">Description: Preparation of meals serving 10-20 people.</p>
            <p className="text-base lg:text-xl text-[#002A42]">
              - Suitable for medium-sized gatherings and events.<br />
              - Efficient and large-scale meal preparation.
            </p>
          </div>
        </div>
      </article>

      {/* Baby Sitting Section */}
      <section className="flex flex-col lg:flex-row mx-4 lg:mx-20 gap-8 lg:gap-16 my-10 lg:my-20">
        <div className="flex-1">
          <img src={BabySitter} alt="Baby Sitter on duty" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="flex-1">
          <h1 className="font-extrabold text-3xl lg:text-4xl leading-snug text-[#002A42] underline py-4 lg:py-6 font-sans">Baby Sitting</h1>
          <p className="font-light text-lg lg:text-xl leading-relaxed tracking-wide pb-6 lg:pb-10">
            - Professional babysitting services for children of all ages.<br />
            - Activities to engage and entertain children.<br />
            - Basic children tasks such as feeding, diaper changing, and ensuring safety.
          </p>
        </div>
      </section>

      {/* Running Errands Section */}
      <section className="flex flex-col lg:flex-row mx-4 lg:mx-20 gap-8 lg:gap-16 my-10 lg:my-20">
        <div className="flex-1">
          <img src={Errand} alt="Running Errands" className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="flex-1">
          <h1 className="font-extrabold text-3xl lg:text-4xl leading-snug text-[#002A42] underline py-4 lg:py-6 font-sans">Errand Running</h1>
          <p className="font-light text-lg lg:text-xl leading-relaxed tracking-wide pb-6 lg:pb-10">
            - ChoreAid helps customers with running errands like grocery shopping, picking up packages, or other miscellaneous tasks.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServiceMid;