import Carousel from 'react-bootstrap/Carousel';
import image5 from '../Images/image5.jpg';
import image6 from '../Images/image6.jpg';
import image7 from '../Images/image7.jpg';
import '../CSS/appcarousle.css';
import {ButtonComponent} from  '@syncfusion/ej2-react-buttons';
function Appcarousel() {

const customprevbtn = ( ) => {
  <ButtonComponent className='e-btn' cssClass='e-flat e-round' iconCss='e-icons e-chevron-left-double'></ButtonComponent>
}

  return (
  
    <Carousel data-bs-theme="light">
      
    <Carousel.Item className="height" interval={3000}>
      <img
        className="w-100"
        src={image5}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>Get a business off the ground </h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="height" interval={1500}>
      <img
        className="w-100"
        src={image6}
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Get a business off the ground </h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="height" interval={1500}>
      <img
        className="w-100"
        src={image7}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Get a business off the ground </h5>
        <p>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default Appcarousel;