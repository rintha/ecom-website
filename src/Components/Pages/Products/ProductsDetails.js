import React from "react";
import { useParams,useLocation } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { Button, Container } from "react-bootstrap";

const ProductDetails = (props) => {
  console.log('ProductDetails rendered');
  const params = useParams();
  console.log(params.productId);

  const location = useLocation();
  const product = location.state.product;

  const imageWidth = 300;
  const imageHeight = 300;
  return (
    <Container>
      <div className="d-flex justify-content-center mt-5">
        <div>
          <Carousel
            style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                alt="First slide"
                width={imageWidth}
                height={imageHeight}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
                alt="Second slide"
                width={imageWidth}
                height={imageHeight}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
                alt="Third slide"
                width={imageWidth}
                height={imageHeight}
              />
            </Carousel.Item>
          </Carousel>
          <div className="mt-2">
            <span className="mx-3">
              <Button>ADD TO CART</Button>
            </span>
            <Button variant="secondary">BUY NOW</Button>
          </div>
        </div>

        <div className="mt-4 mx-5">
          <h1 className="fw-bold">{product.title}</h1>
          <p>{product.price}</p>
          <p>Product Reviews</p>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
