import React from 'react';

import Carousel from "react-bootstrap/Carousel";

const CarouselCompo = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bd.gaadicdn.com/processedimages/yamaha/mt-15-2-0/source/mt-15-2-062e4b1d700b63.jpg?tr=w-375"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="data:image/jpeg;base64,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"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW90b3JiaWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
};

export default CarouselCompo;