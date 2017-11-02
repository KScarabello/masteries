import React from 'react';


export default function Event(props){
    return (
      <div>
        <h1>{props.match.params.id}</h1>
        <h1>{props.match.params.name}</h1>
      </div>
    )
}