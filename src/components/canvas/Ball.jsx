import React from 'react'

const Ball = ({stack}) => {
  return (
    <div>
      <img src={stack.icon} alt={stack.name} 
        className='w-[56px]'
      />
      <p className=''>{stack.name}</p>
    </div>
  )
}

export default Ball