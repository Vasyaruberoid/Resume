import {useState}  from 'react';
import  cl from './myBurger.module.css';
import {slide as Menu, handleOnClose,handleOnOpen} from 'react-burger-menu';
import {useSpring, animated } from '@react-spring/web';
import Modal from '../Modal/Modal';

const MyBurger = () => {
  let isMenuOpen = function(state) {
    return state.isOpen;
  };

    const contact = (
      <div className={cl.wrapper}>
        <h1 className={cl.title}>Contact</h1>
       <ul className={cl.text}>
        <li>Phone: +375299766537, Viber,Whattsap</li>
        <li>Mail: vasilij.starovojtov@mail.ru</li>
        <li><a href='https://github.com/Vasyaruberoid'>GitHub pages</a></li>
        <li>Telegram: @Vasyaruberoid</li>
       </ul>
      </div>
      )
      const about = (
    <div className={cl.wrapper}>
<h1 className={cl.title}>About me</h1>
  <p className={cl.text}>I am 27 years old,love to develop,
  I like playing the guitarб
communication skills, stress resistant</p>
  <ul>
    <h2>Language</h2>
    <li>Russian</li>
    <li>Belorusian</li>
    <li>English(A2)</li>
    <li>Polish(A1) certificate</li>
    </ul>
<h2>Technology</h2>
<ul>
  <li>HTML</li>
  <li>Css(Less, Sass)</li>
  <li>Native JavaScript(ES+6)</li>
  <li>Type script</li>
  <li>Node JS, MongoDB, Wordpess</li>
  <li>GitHub, Webpack,Figma</li>
</ul>
    </div>
      )
    
 
  const spring = useSpring({  
    from: { x: 50 },
    to: { x: 0 },
  })
  const [modalActive, setModalActive]= useState(false);
  const [openSecond, setOpenSecond] = useState(false);
const styles ={ bmOverlay: {
  background: 'rgba(0, 0, 0, 0.5)', 
  width: '100%',
  marginLeft: '-745px',
  marginTop: '-10px'
},
}
return(
  <animated.div style={{...spring}}  className={cl.container}>
    <h2  className={cl.text}>Cv</h2>
    <div className={cl.wrap}>
<Menu
className={cl.menu_burger}
onStateChange={ isMenuOpen }  
right
width={400}
pageWrapId={cl.page}
outerContainerId={cl.out}
isOpen={false}
onOpen={ handleOnOpen }
 onClose={handleOnClose}
styles={styles}
 burgerButtonClassName={cl.burger_btn}
 burgerBarClassName={cl.menu_bar}
 crossButtonClassName={ cl.burger_cross }
 >
        <button className={cl.menu_item}  href="/">Home</button>
        <button  className={cl.menu_item} onClick={()=> setModalActive(true)} href="/about">About</button>
        <button  className={cl.menu_item} onClick={()=> setOpenSecond(true)} href='/'>Contact</button>
</Menu>
<Modal active={modalActive} setActive={setModalActive}>{about}</Modal>
<Modal active={openSecond} setActive={setOpenSecond}>{contact}</Modal>
  
  </div>
  </animated.div>
)
}

export default MyBurger ;