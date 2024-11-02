import FacebookIcon from '../../images/icons8-facebook.svg';
import TwitterIcon from '../../images/icons8-twitter.svg';
import InstagramIcon from '../../images/icons8-instagram.svg';
import GmailIcon from '../../images/icons8-gmail.svg';
import ChoreAidLogo from '../../images/logo-icon.png'; 


const Footer = () => {
  return (
    <footer className=' max-w-5xl mx-auto text-gray-800 py-16 p-6 '>

      <section className=' mx-auto flex flex-col md:flex-row justify-between'>
        <div className='mb-6 md:mb-0'>
          <h1 className='text-2xl font-bold mb-3'>
            <a href='/' target='self' title="ChoreAid Home" rel="noopener noreferrer">
              <img src={ChoreAidLogo} alt="ChoreAid Logo" className='h-12' />
            </a>
          </h1>
          <p>
            <a href='mailto:choreaid@gmail.com' target="_blank" title="Email Us" rel="noopener noreferrer" className='font-bold text-gray-600 hover:underline'>Choreaid@gmail.com</a>
          </p>
          <p>{/*Call Us:*/} <span className='text-gray-600 font-bold'>+2347899877997</span></p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/" target="_blank" rel='noreferrer' title="Facebook">
              <img src={FacebookIcon} alt="Facebook" width="40" height="40" className='h-8 w-8'/>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel='noreferrer' title="Twitter">
              <img src={TwitterIcon} alt="Twitter" width="40" height="40" className='h-8 w-8'/>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel='noreferrer' title="Instagram">
              <img src={InstagramIcon} alt="Instagram" width="40" height="40" className='h-8 w-8'/>
            </a>
            <a href="https://www.gmail.com" target="_blank" rel='noreferrer' title="Gmail">
              <img src={GmailIcon} alt="Gmail" width="40" height="40" className='h-8 w-8'/>
            </a>
          </div>
        </div>

        <div className='flex flex-wrap md:w-1/2'>
          <div className='mb-6 w-full md:w-1/3'>
            <h3 className='text-lg font-semibold '>Quick Links</h3>
            <p><a href='/' target='blank' rel='noreferrer' className='text-[#028DDB]'>About Us</a></p>
            <p><a href='/' target='blank' rel='noreferrer' className='text-[#028DDB]'>Blogs</a></p>
            <p><a href='/' target='blank' rel='noreferrer' className='text-[#028DDB]'>Terms & Conditions</a></p>
          </div>
          <div className='mb-6 w-full md:w-1/3'>
            <h3 className='text-lg font-semibold '>Help Center</h3>
            <p><a href='/' target='blank' rel='noreferrer' className='text-[#028DDB]'>Privacy Policy</a></p>
            <p><a href='/' target='blank' rel='noreferrer' className='text-[#028DDB]'>Contact Support</a></p>
            <p><a href='/' target='blank' rel='noreferrer' className='text-[#028DDB]'>FAQ</a></p>
          </div>
          <div className='mb-6 w-full md:w-1/3'>
            <h3 className='text-lg font-semibold '>Join Our Team</h3>
            <p><a href='/' target='blank' rel='noreferrer' className='text-[#028DDB]'>Careers</a></p>
            <p><a href='/' target='blank' rel='noreferrer' className='text-[#028DDB]'>Meet Our Team</a></p>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
