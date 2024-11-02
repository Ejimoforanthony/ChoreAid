import Header from "../Layout/Header"
import Main from './main'
import ServicesSection from "./services" 
import FAQ from "./Faq"
import Footer from "../Layout/Footer"
import ContactForm from "../Layout/contact"


const ServicesMain = () => {
  return (
<>
<Header />
<Main />
<ServicesSection />
<FAQ />
<ContactForm />
<Footer />
</>
    
  )
}

export default ServicesMain