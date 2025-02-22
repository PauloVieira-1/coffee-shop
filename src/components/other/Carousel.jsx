import Carousel from 'react-bootstrap/Carousel';
import Image1 from "../../assets/unsplash3.jpg"
import Image2 from "../../assets/unsplash4.jpg"
import Image3 from "../../assets/unsplash8.jpg"

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img src={Image1} className='d-block w-100' style={{height: "70vh", objectFit: "cover"}}>
        </img>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={Image2} className='d-block w-100' style={{height: "70vh", objectFit: "cover"}}>
      </img>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image3} className='d-block w-100' style={{height: "70vh", objectFit: "cover"}}>
      </img>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;