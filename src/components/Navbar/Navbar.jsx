import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () =>{
  const [toggleMenu , setToggleMenu]=React.useState(false);

// use state allows us to make dynamic changes 

return(

  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
        </ul>

        <div className="app__navbar-register">
          
          <a href='#login' className='p__opensans' >Log in / registration</a>
          <div />
          <a href='/' className='p__opensans'>book table</a>
        </div>

        {/* for small screens */}
        <div className="app__navbar-smallscreen">
          {/* jb ham hamburger mrnu py click kryen gy tb yeh true ho jay ga */}
          <GiHamburgerMenu color="#fff" fontSize ={27} onClick={()=>setToggleMenu(true)}/>
        
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu color='#fff'  fontSize ={27} className="overlay__close" onClick={()=>setToggleMenu(false)}/>
          {/* jb close py click kryen gy to false ho jay ga */}
          <ul className="app__navbar-smallscreen_links">
          <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
         
        </ul>
          </div>)}


        </div>
  </nav>
);}

export default Navbar;
