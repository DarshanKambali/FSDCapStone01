import Carousel from "react-bootstrap/Carousel";
import '../Login/carousel.css';

const Home = () => {
  return (
    <div class="container-xl">
      <div class="row">
        <div class="col"></div>
        <div class="col-8">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhhcm1hY2V1dGljYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                                alt="First slide"
                            />
                            </Carousel.Item>

                            <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                              src="https://images.jdmagicbox.com/comp/belgaum/dc/9999px831.x831.100514114328.w9d5dc/catalogue/ajit-pharma-belgaum-0i4rof3asq.jpg?clr=#4f1725"
                                alt="Second slide"
                            />
                            </Carousel.Item>

                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                              src="https://image.shutterstock.com/image-vector/online-pharmacy-medicine-concept-medical-260nw-1650122491.jpg"
                                alt="Third slide"
                            />
                            </Carousel.Item>

                            

                        </Carousel>
        </div>
        <div class="col"></div>

        <div class="row">
          <div class="col"></div>
          <div class="col-8">

            <p class="lead">
                  <h5>Welcome To Ajith Pharma!</h5>
            </p>
            
            
            <p class="lead">
A one-stop solution for all your clinical problems!

            </p>
            <p class="lead">
            Ajith Pharma is a Bengaluru based pharma company which sales medicines Online in  
India as per the order they receives from Customers. They have been operating in India since 2001.
 Ajith Pharama is alos into home care services.
            </p>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;