import cooking from '../../images/CookImage.jpeg';

const Cooking = () => {
    return (
      <section className="mx-auto max-w-5xl p-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          
          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-1/2">
                <img
                    src={cooking}
                    alt="Cooking service"
                    className="w-full md:w-1/2  h-72 object-cover rounded-md"
                />
            </div>
  
          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold text-black mb-4">Cooking</h3>
            <p className="mb-4">
                ChoreAid offers a flexible cooking service where customers provide all necessary ingredients, and our professional cooks provide the labor and expertise to prepare the meals. Meal Preparation Specialty Cooking
            </p>
            <ul className="list-decimal ml-4 text-gray-700 mb-8">
              <li className="font-semibold">Professional Cleaning Service</li>
              <li className="font-semibold">AssistKlin Cleaning Service</li>
            </ul>
          </div>
        </div>
      </section>
    );
};

export default Cooking;
