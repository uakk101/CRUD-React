import React from 'react'

const TextFeild = ({label , onChange , value , inputProps}) => {
  return (

    <div className='flex flex-col'>
        <label className='text-gray-700'>{label}</label>
        <input 
        className='border border-gray-300 p-2 rounded-md'
        {...inputProps}
        value={value}
        onChange={onChange}
        />
        
    </div>
  )
}

export default TextFeild