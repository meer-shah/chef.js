import React from 'react';
import {images} from '../../constants'
const SubHeading = ({titile}) => (
  <div style={{ marginBottom:'1rem'}}> 
  <p className="p__cormorant"> {titile}</p>
<img src={images.spoon} alt="spoon" className='spoon__img ' />
  </div>
);

export default SubHeading;
