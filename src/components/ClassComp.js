import React, {Component} from 'react';
import FuncComp from './FuncComp';
import {Link} from 'react-router-dom';


export default class ClassComp extends Component{
    constructor(props){
        super(props)

        this.state = {

            input: ''

        }

    }

   

render(){

    const propsStyle = {
        color: "red"
    }


    return(
        <div className='large-container'>
            
            <FuncComp styleProps={this.propsStyle} />

           <Link to='routea'> <h1>Click here to experience the joys of routing</h1></Link>

           <input placeholder="type something" onChange={(e) =>this.setState(e.target.value)}>Click me </input>
           


        </div>
    )




}


    





}