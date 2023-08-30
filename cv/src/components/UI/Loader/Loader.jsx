import React from 'react'
import cl from './loader.module.css';
import ClipLoader from "react-spinners/ClipLoader";
 

const Loader = ({loading}) => {
 
  return (
    <div className={cl.loader}>
<ClipLoader
        color={'rgba(131, 38, 253, 1.00)'}
        className='Loader'
        loading={loading}
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    
  )
}


export  default Loader;