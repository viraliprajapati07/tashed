import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slide.css'; // Your custom CSS for styling

const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000} // Change slides every 5 seconds
      showThumbs={false}
      showStatus={false}
    >
      <div className="slide">
        <img src="assets/images/banner.png" alt="Banner 1" />
        <div className="text-overlay">
          <h1>ALL YOU NEED TO START <br/> YOUR DREAM HOME</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam<br/>
									nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat<br/>
									volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation<br/>
									ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis<br/>
									autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie<br/>
									consequat, vel illum dolore eu feugiat
          </p>
          <button className='b'>Start Shopping</button>
        </div>
      </div>
      <div className="slide">
        <img src="assets/images/banner2.png" alt="Banner 2" />
        <div className="text-overlay">
          <h1>ALL YOU NEED TO START <br/>YOUR DREAM HOME</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam<br/>
									nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat<br/>
									volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation<br/>
									ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis<br/>
									autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie<br/>
									consequat, vel illum dolore eu feugiat
          </p>
          <button className='b'>Start Shopping</button>
        </div>
      </div>
      <div className="slide">
        <img src="assets/images/banner.png" alt="Banner 3" />
        <div className="text-overlay">
          <h1>ALL YOU NEED TO START 
          <br/>YOUR DREAM HOME</h1>
          <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam<br/>
									nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam <br/>
									volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation<br/>
									ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis<br/>
									autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie<br/>
									consequat, vel illum dolore eu feugiat
          </p>
          <button className='b'>Start Shopping</button>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
