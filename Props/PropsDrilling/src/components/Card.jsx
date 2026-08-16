import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} alt="" />
      <h1>{props.user}</h1>
      <h2>{props.age}</h2>
      <p>Lorem ipsum dolor sit amet co=instrectetur adipisicing elit</p>
      <button>View profile</button>
    </div>
  )
}

export default Card
