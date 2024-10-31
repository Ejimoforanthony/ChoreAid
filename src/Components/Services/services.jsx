import Cleaning from "./cleaning";
import Cooking from './cooking'
const ServicesSection = () => {
    return (
      <section className="p-8">
        <h2 className="text-2xl font-bold text-center mb-8">We render the following services...</h2>
        <Cleaning />
        <Cooking />
      </section>
    );
  };
  
  export default ServicesSection;
  