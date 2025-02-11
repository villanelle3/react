import Carousel from 'react-bootstrap/Carousel';
import { Button } from "@material-tailwind/react";
import {
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

// const CarrImages = Array(6).fill().map((item, i) => (
//   <img key={item} src={require(`./images/${i+1}.png`)} className="d-block w-100 carimg" alt="slide" />
// ));

const CarouselItem = [
  { id: 1, H1: 'The Most Experienced Agency', IMG: './images/1.png', leftSize: false, H2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt officiis assumenda id quo, neque eligendi nobis aperiam sunt magni eaque pariatur consequuntur dolorem itaque, provident totam debitis illum culpa atque.'},
  { id: 7, H1: "So if you're looking for a modeling agency.", IMG: './images/9.png', leftSize: true, H2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt officiis assumenda id quo, neque eligendi nobis aperiam sunt magni eaque pariatur consequuntur dolorem itaque, provident totam debitis illum culpa atque.'},
  { id: 2, H1: 'With a professional team of agents', IMG: './images/2.png', leftSize: false, H2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt officiis assumenda id quo, neque eligendi nobis aperiam sunt magni eaque pariatur consequuntur dolorem itaque, provident totam debitis illum culpa atque.'},
  { id: 3, H1: 'Our newest project', IMG: './images/3.png', leftSize: false, H2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt officiis assumenda id quo, neque eligendi nobis aperiam sunt magni eaque pariatur consequuntur dolorem itaque, provident totam debitis illum culpa atque.'},
  { id: 4, H1: '陈瑜 ESTELLE CHEN', IMG: './images/4.png', leftSize: true, H2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt officiis assumenda id quo, neque eligendi nobis aperiam sunt magni eaque pariatur consequuntur dolorem itaque, provident totam debitis illum culpa atque.'},
  { id: 5, H1: 'opportunities for all', IMG: './images/7.png', leftSize: true, H2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt officiis assumenda id quo, neque eligendi nobis aperiam sunt magni eaque pariatur consequuntur dolorem itaque, provident totam debitis illum culpa atque.'},
  { id: 6, H1: 'Share your talent', IMG: './images/8.png', leftSize: false, H2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt officiis assumenda id quo, neque eligendi nobis aperiam sunt magni eaque pariatur consequuntur dolorem itaque, provident totam debitis illum culpa atque.'},
]

function CarouselMain() {
  return (
    <>
      <Carousel>
          {
            CarouselItem.map(item => {
              return (
                <Carousel.Item key={item.id}>
                  <div className={`container-sm hero bg-white ${item.leftSize ? "leftSize" : "rightSize"} `} >
                    <h1 className='hero__title text-green-900'>{item.H1}</h1>
                    <img className='hero__img-logo' src={require('./images/logo.png')} alt="" />
                    <h2 className='hero__desc'>{item.H2}</h2>
                    <Button variant="text" className="flex items-center gap-2">
                      Read More <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className='img-bg'></div>
                  <img
                    className="d-block w-100 carimg"
                    src={require(`${item.IMG}`)}
                    alt="Second slide"
                  />            
                </Carousel.Item>
              );
            })
          }
        </Carousel>
    </>
  );
}

export default CarouselMain;
