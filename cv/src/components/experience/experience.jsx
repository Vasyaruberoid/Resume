import React from 'react';
import cl from './experience.module.css';
import {useSpring, animated } from '@react-spring/web';
import ReactFlipCard from 'reactjs-flip-card';
import classNames from 'classnames';

const Experience = () => {
  const spring = useSpring({
    from: { x: -50 },
    to: { x: 0 },
  })
 
  return (
    <animated.div style={{...spring}} className={cl.container}>

  <ReactFlipCard
  flipCardCss={classNames(cl.wrapper1,cl.text)}
  frontCss={cl.wrapper1}
  backCss={cl.back1}
       frontComponent={
     <div className={cl.wrapper1}>
     <h1 className={cl.text}>1+</h1>
     <p className={cl.text}>Year of study</p>
         </div>}
         backComponent={<div className={cl.back1}>
         <h1 className={cl.text}>7+</h1>
     <p className={cl.text}>learn technologies</p>
         </div>}
         />  
      
<ReactFlipCard
 flipCardCss={classNames(cl.wrapper2,cl.text)}
  backCss={cl.back2}
frontCss={cl.wrapper2}
frontComponent={
<div className={cl.wrapper2}>
<h1 className={cl.text}>3+</h1>
<p className={cl.text}>Pet project</p>
      </div>}
      backComponent={
        <div className={cl.back2}>
  <h1 className={cl.text}>100+</h1>
  <p className={cl.text}>Shared more than commits</p>
        </div>}
        />
  
  <ReactFlipCard
   flipCardCss={classNames(cl.wrapper3,cl.text)}
  frontCss={cl.wrapper3}
  backCss={cl.back3}
  frontComponent={
  <div className={cl.wrapper3}>
  <h1 className={cl.text}>1+</h1>
  <p className={cl.text}>Year of study</p>
      </div>}
      backComponent={
      <div className={cl.back3}>
      <h1 className={cl.text}>3+</h1>
  <p className={cl.text}>Passed interviews</p>
      </div>}
      />
      
      </animated.div>
  )
}

export default Experience