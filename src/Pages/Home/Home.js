import React from "react";
import { Carousel } from "react-bootstrap";
import Services from "../ServicesPage/Services/Services";
import caro1 from "../../images/caro1.png";
import caro2 from "../../images/caro2.png";
import caro3 from "../../images/caro3.png";
import caro4 from "../../images/caro4.png";
import caro5 from "../../images/caro5.png";
import Reviews from "../Reviews/Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={caro1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={caro2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={caro3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={caro4} alt="Third slide" />

            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={caro5} alt="Third slide" />

            <Carousel.Caption>
              <h3>Fourth slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="service-container">
        <Services></Services>
      </div>
      <div className="review-container">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
