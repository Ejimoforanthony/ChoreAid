import { FaUserTie, FaDollarSign, FaChartLine, FaClipboardCheck, FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaUserEdit, FaCheckCircle } from 'react-icons/fa';

const FlexibleWork = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Flexible work at your fingertips!</h2>
      <p className="text-center text-gray-500 mb-8 max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <FaUserTie className="text-blue-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Become your own boss</h3>
          <p className="text-gray-500">Work when, where, and how you want. Offer services in your chosen field and set a flexible schedule that suits your needs.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaDollarSign className="text-blue-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Set your own rates</h3>
          <p className="text-gray-500">Set your earnings goals and take control of how much you make by setting your rates for the services you offer.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaChartLine className="text-blue-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Grow your business</h3>
          <p className="text-gray-500">Increase your reach and revenue by offering more services or skills as you grow and invest in what you need.</p>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-center my-8">Join Our Team!</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <FaClipboardCheck className="text-blue-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Sign Up</h3>
          <p className="text-gray-500">Create your account.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaUserEdit className="text-blue-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Set your Profile</h3>
          <p className="text-gray-500">Select the services you want to offer.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaCheckCircle className="text-blue-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Verify your eligibility</h3>
          <p className="text-gray-500">Confirm required background and criminal history verifications, as required.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaCalendarAlt className="text-blue-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Set your schedule</h3>
          <p className="text-gray-500">Set your weekly availability and opt-in to receive same-day jobs.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaMapMarkerAlt className="text-blue-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Set your location</h3>
          <p className="text-gray-500">Set your location and area you are willing to service.</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <FaBriefcase className="text-blue-500 text-4xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Start getting jobs</h3>
          <p className="text-gray-500">Make money on your own terms and grow your business.</p>
        </div>
      </div>
    </div>
  );
};

export default FlexibleWork;
