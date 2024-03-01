import logo from './assets/logo.jpg'
import './App.css';
import Fade from 'react-reveal/Fade'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './component/Button.js';
import Footer from './component/Footer.js';

const data = [
  { src: require('./assets/GIao_dien/1.jpg') },
  { src: require('./assets/GIao_dien/2.jpg') },
  { src: require('./assets/GIao_dien/3.jpg') },
  { src: require('./assets/GIao_dien/4.jpg') },
]

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="App">
      <div class='img-ctn'>
        <Fade top duration={2500}>
          <img src={logo} alt='logo' class='img-logo' />
        </Fade>
      </div>
      <div class='content-ctn'>
        <div class = 'content'>
          <div class='img-container'>
            <Slider {...settings}>
              {data.map((d) => (
                <div class=''>
                  <div class='img-content'>
                    <img src={d.src} alt="" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div class='titile-ctn'>
            <Fade top duration={2500}>
              <h1 class='ctn-title'>WELCOME TO DFSTUDY</h1>
              <p class='slogan'>Learn everytime, everywhere</p>
              <Button></Button>
            </Fade>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
