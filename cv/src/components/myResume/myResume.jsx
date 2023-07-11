import React from 'react';
import cl from './myResume.module.css';

const MyResume = () => {
  return (
    <div className={cl.container}>
      <div className={cl.wrapper}> 
      <h2 className={cl.text1}>About</h2>
       <h2 className={cl.text2}>Resume</h2>
       </div>
      
       <p className={cl.text3}>Hello everyone, I'm applying for a vacancy as a junior front-end developer.
       I'm 27 years old, without true habits, the desire to develop constantly.
        I always try to improve my skills and not sleep-
up to date with the latest developments</p>
    </div>
  )
}

export default MyResume;