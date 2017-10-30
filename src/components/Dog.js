import React from 'react';


export default function Dog(props){
    return <h1>{props.match.params.name}</h1>
}