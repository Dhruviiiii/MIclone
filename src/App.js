import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Slider from './components/Slider.js';
import data from './data/data.json';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from './components/StarProduct.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories.js';
import ProductReview from './components/ProductReview.js';
import Video from './components/Video.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import NavOptions from './components/NavOptions.js';


function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} 
      fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />


      <Slider start={data.banner.start}/>
      <Offers offers={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
      <Routes>
      <Route exact  path="/music" 
      element={<HotAccessories music={data.hotAccessories.music} musiccover={data.hotAccessoriesCover.music}/>}/>

      <Route exact  path="/smartDevices"
      element={<HotAccessories smartdevice={data.hotAccessories.smartDevice} smartdevicecover={data.hotAccessoriesCover.smartDevice}/>}/>

      <Route exact  path="/Home"
      element={<HotAccessories home={data.hotAccessories.home} homecover={data.hotAccessoriesCover.home}/>}/>

      <Route exact  path="/Lifestyle"
      element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestylecover={data.hotAccessoriesCover.lifeStyle}/>}/>

      <Route exact  path="/MobileAccessories"
      element={<HotAccessories mobile={data.hotAccessories.mobileAccessories} mobilecover={data.hotAccessoriesCover.mobileAccessories}/>}/>

      </Routes>
      <Heading text="PRODUCT REVIEWS"/>

      <ProductReview ProductReview={data.productReviews}/>

      <Heading text="VIDEOS"/>

      <Video video={data.videos}/>

      <Heading text="IN THE PRESS"/>

      <Banner banner={data.banner}/>

      <Footer  footer={data.footer} />
    </Router>
      

  );
}

export default App;
