import Carousel from 'react-bootstrap/Carousel';
import { Button } from "@material-tailwind/react";
import {
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
// const CarrImages = Array(6).fill().map((item, i) => (
//   <img key={item} src={require(`./images/${i+1}.png`)} className="d-block w-100 carimg" alt="slide" />
// ));

function CarouselMain() {
  return (
    <>
      <Carousel>
        
        <Carousel.Item>
          <div className="container-sm hero bg-white">
            <h1 className='hero__title text-green-900'>With a professional team of agents</h1>
            <img className='hero__img-logo' src={require('./images/logo.png')} alt="" />
            <h2 className='hero__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nobis voluptatibus, soluta aliquid accusantium consequuntur voluptas? Rem, dicta libero molestiae, incidunt, repudiandae pariatur minus ipsam inventore dolor id consequatur modi.</h2>
            <Button variant="text" className="flex items-center gap-2">
              Read More <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
            </Button>
          </div>
          <div className='img-bg'></div>
          <img
            className="d-block w-100 carimg"
            src={require('./images/2.png')}
            alt="Second slide"
          />
        </Carousel.Item>
      

      </Carousel>

      
      
    </>
    
  );
}

export default CarouselMain;