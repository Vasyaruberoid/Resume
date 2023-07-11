import {useMemo} from 'react';
import cl from './myBased.module.css';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';

const MyBased = ()=> {
  const {isLoaded} = useLoadScript({
   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, 
  });

  if (!isLoaded) return <div>Loading...</div>
  return <Map/>
}

const Map = () => {
  const center = useMemo(() => ({lat:52.129272, lng:26.07467}),[]); 

  return (
    <div>
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
  </div>
  
  )
}

export default MyBased;