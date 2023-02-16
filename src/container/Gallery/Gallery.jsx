import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  // abi scrollref null hy
  const scrollRef = React.useRef(null);
  // This line declares a scrollRef variable using the useRef() hook provided by React.
  //  This hook creates a reference to an element in the DOM that will be used to implement scrolling functionality

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  // This code defines a function called scroll that takes a direction parameter. It gets the current value of the scrollRef variable (which references the element in the DOM that will be scrolled), and then checks the direction parameter. If the direction is "left", it scrolls the element 300 pixels to the left by subtracting 300 from current.scrollLeft.
  //  If the direction is "right", it scrolls the element 300 pixels to the right by adding 300 to current.scrollLeft

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
        {/* yhan scroll left implimet kia hy */}
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>

// This code creates a container for the images in the gallery. It uses the scrollRef reference to specify that this is the element that should be scrolled when the buttons are clicked. The images are defined as an array of images,
//  which are mapped over to create image cards containing the image and an Instagram icon
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;