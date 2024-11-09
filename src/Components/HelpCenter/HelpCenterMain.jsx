import Header from './Header'
import Main from './main'
import HowItWorks from './steps'
import FAQ from '../Services/Faq'
import Footer from '../Layout/Footer'
import HelpCenterBot from '../HelpCenter/HelpCenterBot'

const HelpCenterMain = () => {
  return (
    <>
    <Header />
    <Main />
    <HowItWorks />
    <FAQ />
    <HelpCenterBot />
    <Footer />
    </>
  )
}

export default HelpCenterMain