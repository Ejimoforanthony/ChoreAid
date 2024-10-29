import HomePageBot from './HomePageBot';
import HomePageTop from './HomePageTop';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer'

const HomePage = () => {
  return (
        <div>
            <Header />
            <HomePageTop />
            <HomePageBot />
            <Footer />
        </div>
  )
}

export default HomePage