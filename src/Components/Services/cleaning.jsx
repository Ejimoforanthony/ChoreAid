import cleaning from '../../images/cleaning.jpeg'
const Cleaning = () => {
    return (
      <section className="md:p-8 ">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          
          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src={cleaning}
              alt="Cleaning service"
              className="w-full h-72 rounded-lg shadow-md"
            />
          </div>
  
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-black mb-4">Cleaning</h3>
            <p className="mb-4">
              ChoreAid offers comprehensive cleaning services tailored to meet the diverse needs of individuals and families. The cleaning service is divided into two distinct sections to provide flexibility and convenience for our customers:
            </p>
            <ul className="list-decimal ml-4 text-gray-700 mb-8">
              <li className="font-semibold">Professional Cleaning Service</li>
              <li className="font-semibold">AssistKlin Cleaning Service</li>
            </ul>
          </div>
        </div>
  
        {/* Detailed Services */}
        <div className="mb-8 mt-2">
          <h4 className="font-semibold">1. Professional Cleaning Service</h4>
          <p className="mb-2">
            <strong>Description:</strong> ChoreAid provides both the cleaning tools and the cleaning service. This option is ideal for customers who want a hassle-free experience where everything is taken care of by our professional cleaners.
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Features:</strong>
            <ul className="list-disc ml-8 text-gray-700">
              <li>Thorough cleaning of all designated areas.</li>
              <li>Suitable for customers who prefer not to handle cleaning logistics.</li>
              <li>High-quality, eco-friendly cleaning products used.</li>
            </ul>
          </p>
        </div>
  
        <div className="mb-8">
          <h4 className="font-semibold">2. AssistKlin Cleaning Service</h4>
          <p className="mb-2">
            <strong>Description:</strong> Customers provide the cleaning tools, and ChoreAid provides the cleaning service. This option is cost-effective and convenient for customers who already have cleaning supplies and equipment at home.
          </p>
          <p className="mb-2">
            <strong>Features:</strong>
            <ul className="list-disc ml-8 ">
              <li>Professional cleaning service performed by ChoreAid cleaners.</li>
              <li>Flexible and budget-friendly option.</li>
              <li>Suitable for customers who prefer using their own cleaning products.</li>
            </ul>
          </p>
        </div>
  
        {/* Accommodation Types */}
        <div className="mb-4">
          <h4 className="font-semibold">Accommodation Types</h4>
          <p className=" mb-2">Self-contained, One Bedroom, Two Bedroom, Three Bedroom, Four Bedroom and Above</p>
          <p className="">ChoreAid will provide the following services</p>
          <ul className="list-none font-[500] ml-8 text-black">
            <li >General Cleaning</li>
            <li>Fumigation</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Cleaning;
  