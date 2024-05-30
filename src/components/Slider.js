import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Slider({start}) {
  return (
    <div>
        <Carousel fade>
            {
            start.map((item)=>(
              <Carousel.Item>
                <img 
                ClassName="d-block w-100"
                src={item}
                alt="First Lable" height="472px" width="1300px"
                />
              </Carousel.Item>
            ))
            }
        </Carousel>
      
    </div>
  )
}

export default Slider
