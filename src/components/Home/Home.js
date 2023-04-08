import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Home.css';

// Import your images here

import image1 from '../../assets/image1.jpeg';
import image2 from '../../assets/image2.jpeg';
import image3 from '../../assets/image3.jpeg';

const Home = () => {
  return (
    <div id="home" className="home-section">
      {/* <h1>Welcome to My One Page Website</h1> */}
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={600}
      >
        <div>
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
      </Carousel>
      {/* // Add more content here... */}
    </div>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <div id="home" className="home-section">
//       <h1>Welcome to My One Page Website</h1>
//       // Add more content here...
//     </div>
//   );
// };
