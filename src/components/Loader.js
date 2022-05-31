import React from 'react'
import loading from './Spin.gif'

const Loader = () => {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
}

export default Loader
