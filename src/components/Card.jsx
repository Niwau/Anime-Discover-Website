import React from 'react'

export const Card = (props) => (
  <div>
    <img src={props.src}/>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
)
