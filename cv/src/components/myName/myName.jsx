import React from 'react'
import cl from './myName.module.css';

const MyName = () => {
  return (
    <div className={cl.myName}>
      <h2 className={cl.text1}>
        Name:
        </h2> 
      <h2 className={cl.text2}>Vasiliy
      </h2>
      </div>
  )
}

export default MyName;