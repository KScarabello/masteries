import React, {Component} from 'react';
import FuncComp from './FuncComp';
import {Link} from 'react-router-dom';


export default class ClassComp extends Component{
    constructor(props){
        super(props)

        this.state = {

            

        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick = () => {
        alert('An on-click handler just prompted this alert to appear. Points for me!')
    }

render(){

    const propsStyle = {
        color: "red"
    }


    return(
        <div className='large-container'>
            
            <FuncComp styleProps={this.propsStyle} />

           <Link to='routea'> <h1>Click here to experience the joys of routing</h1></Link>

           <button onClick={this.handleClick()}>Click me </button>
           


        </div>
    )




}


    





}