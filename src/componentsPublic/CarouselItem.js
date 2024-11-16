import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage'


function CarouselItem(props) {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" img={props.one.image} />
        <Carousel.Caption>
          <h3>{props.one.title}</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" img={props.two.image} />
        <Carousel.Caption>
          <h3>{props.two.title}</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" img={props.three.image}/>
        <Carousel.Caption>
          <h3>{props.three.title}</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselItem