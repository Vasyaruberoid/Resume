import {useMemo} from 'react';
import cl from './myBased.module.css';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import {useSpring, animated } from '@react-spring/web';

const MyBased = ()=> {
  const {isLoaded} = useLoadScript({
   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, 
  });

  if (!isLoaded) return <div>Loading...</div>
  return <Map/>
}

const Map = () => {
  const center = useMemo(() => ({lat:52.129272, lng:26.07467}),[]); 
  const spring = useSpring({
    from: { x: 50 },
    to: { x: 0 },
  })
  return (
    <animated.div style={{...spring}}>
      <div className={cl.wrapper}>
        <h2 className={cl.text1}>My Based:</h2>
        <h2 className={cl.text2}>Pinsk</h2>
      </div>
  <GoogleMap 
  zoom={10} 
  center={center} 
  mapContainerClassName={cl.container}>
    <Marker position={center}/>
  </GoogleMap>
  </animated.div>
  
  )
}

export default MyBased;