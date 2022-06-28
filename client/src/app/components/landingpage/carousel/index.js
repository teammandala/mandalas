import React,{useEffect, useState} from 'react'
import {Carousel, CarouselItem} from 'react-bootstrap'
import './style.css'

import carousel from "../../../api/carousel";



const Carouselimage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    carousel
      .getCarouselData()
      .then((res) => {
        const data = res.data.carouselData;
        setData(data);
      })
      .catch((error) => {
      });
      
  }, []);
  return (
    <div>
      <Carousel>
      {data.map((items, index)=>{
        return(
          
        <CarouselItem class='image_carousel'>
          <img
          className='d-block'
          src={"http://localhost:8080/" + items.image}
          alt='carousel1'
          />
          <Carousel.Caption>
            <p class="h2">{items.itemName}</p>
            <p class='h5'>{items.description}</p>
          </Carousel.Caption>
        </CarouselItem>
     
        )
      })}
       </Carousel>
    </div>
  )
}
export default Carouselimage