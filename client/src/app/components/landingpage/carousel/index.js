import React from 'react'
import {Carousel, CarouselItem} from 'react-bootstrap'
import './style.css'

const Carouselimage = () => {
  return (
    <div>
      <Carousel>
        <CarouselItem class='image_carousel'>
          <img
          className='d-block'
          src={'https://images.pexels.com/photos/8014587/pexels-photo-8014587.jpeg?cs=srgb&dl=pexels-cup-of-couple-8014587.jpg&fm=jpg'}
          alt='carousel1'
          />
          <Carousel.Caption>
            <h2>image title</h2>
            <p class='h5'> this is test carousel</p>
          </Carousel.Caption>
        </CarouselItem>
        <CarouselItem class='image_carousel'>
          <img
          className='d-block'
          src={'https://images.pexels.com/photos/8382269/pexels-photo-8382269.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-8382269.jpg&fm=jpg'}
          alt='carousel1'
          />
          <Carousel.Caption>
            <h2>image title</h2>
            <p class='h5'> this is test carousel</p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    </div>
  )
}
export default Carouselimage