import React from 'react';
import cl from './header.module.css';
import MyButton from '../UI/MyButton/myButton';
import {useSpring, animated } from '@react-spring/web';

const Header = () => {
  const spring = useSpring({
    from: { x: -50 },
    to: { x: 0 },
  })
  return (
    <animated.div style={{...spring}} className={cl.container}>
     <h1 className={cl.text}>
     Brining Your ideas
     To life Trought
     Front-end JS developer
      </h1>
      <div className={cl.buttons}>
      <MyButton/>
      </div>
  
    </animated.div>
  )
}



export default Header;