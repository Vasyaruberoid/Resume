import {useState} from 'react';
import cl from './myPortf.module.css';
import Modal from '../UI/Modal/Modal';
import calc from '../icons/Calc.jpg';
import flowers from '../icons/shop-flowers.jpg';
import calendar from '../icons/calendar.jpg';
import {useSpring, animated } from '@react-spring/web';


const MyPortf = () => {
  const [modalActive, setModalActive]= useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [Second, setSecond] = useState(false);
  const [allModal, setAllModal]= useState(false)
  const spring = useSpring({
    from: { y: 50 },
    to: { y: 0 }, 
  })
  const allModals = (
    <div className={cl.container_modal}>

    </div>
  )
const modal1 = (
  <div 
  className={cl.modal} 
  onClick={()=> setModalActive(true)}>
    <h1 className={cl.title}>Calculator</h1>
    <img src={calc} className={cl.photo_modal} alt='calc'></img>
    <h3 className={cl.descr}>Сlassic ios-style calculator based on react <a href='https://vasyaruberoid.github.io/Calculator/'>click here</a></h3>
    </div>
)
const modal2 = (
<div 
  className={cl.modal} 
  onClick={()=> setOpenSecond(true)}>
    <h1 className={cl.title}>Shop flowers</h1>
    <img src={flowers} className={cl.photo_modal} alt='flowers'></img>
    <h3 className={cl.descr}>
    Interesting shop for flowers,based on react <a href='/'>click here</a></h3>
    </div>
)
const modal3 = (
  <div 
  className={cl.modal} 
  onClick={()=> setSecond(true)}>
    <h1 className={cl.title}>Calendar</h1>
    <img src={calendar} className={cl.photo_modal} alt='calendar'></img>
    <h3 className={cl.descr}>
    Multifunctional calendar in which you can not only leave notes,based on react <a href='/'>click here</a></h3>
    </div>
)
  return (
    <animated.div style={{...spring}} className={cl.container}>
        <div className={cl.wrapper}>
      <h2 className={cl.text}>
      Portfolio
      </h2>
  <button className={cl.button} onClick={()=> setAllModal(true)}> See All</button>
      </div>
      <div className={cl.group}>
      <button className={cl.container1} onClick={()=> setModalActive(true)}><img src={calc} className={cl.photo} alt='calc'></img></button>
      <button className={cl.container2} onClick={()=> setOpenSecond(true)}><img src={flowers} className={cl.photo} alt='flowers'></img></button>
      <button className={cl.container3} onClick={()=> setSecond(true)}><img src={calendar} className={cl.photo} alt='calendar'></img></button>
      </div>
      <Modal active={modalActive}  setActive={setModalActive}>{modal1}</Modal>
      <Modal active={openSecond} setActive={setOpenSecond}>{modal2}</Modal>
      <Modal active={Second} setActive={setSecond}>{modal3}</Modal>
      <Modal active={allModal} setActive={setAllModal}>{allModals}</Modal>
    </animated.div>
  
  )
}

export default MyPortf;