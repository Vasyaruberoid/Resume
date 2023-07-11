import React from 'react';
import cl from './header.module.css';
import MyButton from '../UI/MyButton/myButton';

const Header = () => {
  return (
    <div className={cl.header}>
     <h1 className={cl.text}>
     Brining Your ideas
     To life Trought
     Front-end JS developer
      </h1>
      
      <div className={cl.buttons}>
      <MyButton className={cl.button}/>
      </div>
     
     

    
      
    </div>
  )
}



export default Header;