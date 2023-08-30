import React from 'react'
import cl from './myName.module.css';
import {useSpring, animated } from '@react-spring/web';
import ReactFlipCard from 'reactjs-flip-card';

const MyName = () => {
  const spring = useSpring({
    from: { x: 50 },
    to: { x: 0 },
  })
  return (
    <animated.div style={{...spring}} className={cl.myName}>
     <ReactFlipCard
     frontComponent={<div className={cl.wrapper1}>
     <h2 className={cl.text1}>
       Name:
       </h2> 
     <h2 className={cl.text2}>Vasiliy
     </h2>
     </div>}
     backComponent={
      <div className={cl.wrapper2}>
      <h2 className={cl.text1}>
        Surname:
        </h2> 
      <h2 className={cl.text2}>Starovojtov
      </h2>
      </div>
     }
     />
        
    

      
      </animated.div>
  )
}

export default MyName;