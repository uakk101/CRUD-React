import React from 'react'

const Button = ({ onClick , children}) => {
  return (

    <button className='text-white bg-indigo-700 py-2 px-4 rounded hover:bg-indigo-800 m-4' onClick={onClick}>
        {children}
    </button>
  )
}

export default Button