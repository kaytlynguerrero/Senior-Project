
// import classes from './MainNavigation.module.css';
// import { Link } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Profitable Choice
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tutorial
              </Link>
            </li>

            <li>
              <Link
                to='/Register'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>REGISTER</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

















// function MainNavigation() {
    

//     return (
//         <>
//         <div>Welcome!</div>
//         <p data-item='Profitable Choice'>Profitable Choice</p>
//         <section> 
//         <div>Naviagte Below</div>
//         <nav>
//             <ul class="items">
//                 <li>
//                     <Link to='/'>Home</Link>
//                 </li>
//                 <li>
//                     <Link to='/Register'>Register</Link>
//                 </li>
//                 <li>
//                     <Link to='/Log-in'>Log-in</Link>
//                 </li>
//                 <li>
//                     <Link to='/Ticker'>Search Company</Link>
//                 </li>
//                 <li>
//                     <Link to ='/Tools'> Lets Get Started!</Link>
//                 </li>
//             </ul>
//         </nav>
//         </section>

// </>
//     )
// }
// export default MainNavigation;









