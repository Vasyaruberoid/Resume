import React from 'react';
import cl from './myLinks.module.css';
import Inst from '../icons/Instagram.png';
import Link from '../icons/Linked.png';
import Vk from '../icons/Vk.png';
import youtube from '../icons/youtube.png';

const MyLinks = () => {
  return (
    <div className={cl.container}>
      <a className={cl.inst} href='https://instagram.com/vasya_ruberoidd?igshid=OGQ5ZDc2ODk2ZA=='><img src={Inst} width='50px' height='50px' alt="" /></a>
      <a className={cl.link} href='https://www.linkedin.com/in/%D0%B2%D0%B0%D1%81%D0%B8%D0%BB%D0%B8%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D0%BE%D0%B2%D0%BE%D0%B9%D1%82%D0%BE%D0%B2-225534257/'> 
      <img src={Link} width='50px' height='50px' alt="" />
      </a>
      <a className={cl.vk} href='https://vk.com/id197509512'><img src={Vk} alt=''/> </a>
      <a className={cl.youtube} href='https://www.youtube.com/channel/UCD-51kRMcZvl7dw5G5jciQA'><img src={youtube} width='50px' height='50px' alt="" /></a>
      </div>
  )
}

export default MyLinks;