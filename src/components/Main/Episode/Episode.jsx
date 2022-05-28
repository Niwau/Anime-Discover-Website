import React from 'react'

export default function Episode(props) {
  return (
    <div>
        <img src={props.src}/>
        <h1>{props.title}</h1>
        <h2>{props.episode}</h2>
    </div>
  )
}
