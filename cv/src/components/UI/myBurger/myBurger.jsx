import React  from 'react';
import  cl from './myBurger.module.css';
import {slide as Menu, handleOnClose,handleOnOpen} from 'react-burger-menu';

const MyBurger = () => {
  let isMenuOpen = function(state) {
    return state.isOpen;
  };
return(
  <div className={cl.container}>
    <h2 className={cl.text}>Cv</h2>
    <div className={cl.wrap}>
<Menu
className={cl.menu_burger}
onStateChange={ isMenuOpen }  
right
isOpen={false}
onOpen={ handleOnOpen }
 onClose={handleOnClose}
 itemListClassName={cl.list_burger}
 outerContainerId={cl.wrap }
 burgerButtonClassName={cl.burger_btn}
 burgerBarClassName={cl.menu_bar}
 crossButtonClassName={ cl.burger_cross }
 menuClassName={cl.menu_burger}
 overlayClassName={cl.overlay}
 >
  
        <a id="home" className={cl.menu_item} href="/">Home</a>
        <a id="about" className={cl.menu_item} href="/about">About</a>
        <a id="contact" className={cl.menu_item} href="/contact">Contact</a>
</Menu>
  </div>
  </div>
)
}

export default MyBurger ;