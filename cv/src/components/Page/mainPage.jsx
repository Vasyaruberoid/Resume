import React from 'react';
import cl from './mainPage.module.css';
import MyBurger from '../UI/myBurger/myBurger';
import Header from '../header/header';
import Experience from '../experience/experience';
import MyName from '../myName/myName';
import MyLinks from '../myLinks/myLinks';
import MyPortf from '../myPortf/myPortf';
import MyResume from '../myResume/myResume';
import img from '../icons/photo.jpg';
import MyBased from '../myBased/myBased';




const MainPage = () => {


  return (
    <div className={cl.layout}>
      <div className={cl.Header}>
<Header/>
         </div>
      <div className={cl.MyBurger}>
     <MyBurger/>
      </div>
      <div className={cl.Experience}>
      <Experience/>
      </div>
      <div className={cl.Img}>
        <img src={img} alt='img' className={cl.Img}/>
      </div>
      <div className={cl.MyName}>
 <MyName/>
      </div>
      <div className={cl.MyLinks}>
    <MyLinks/>
      </div>
      <div className={cl.MyBased}>
        <MyBased/>
      </div>
      <div className={cl.MyPortf}>
     <MyPortf/>
      </div>
      <div className={cl.MyResume}>
   <MyResume/>
      </div>
      </div>
  )
}

export default MainPage;
