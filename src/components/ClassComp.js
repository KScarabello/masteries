import React, {Component} from 'react';
import FuncComp from './FuncComp';
import {Link} from 'react-router-dom';
import {sayHello} from '../ducks/reducer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CompWithProps from './CompWithProps';
import CreateDog from './CreateDog';

 class ClassComp extends Component{
    constructor(props){
        super(props)

        // this.state = {

        //     greeting: ''

        // }


        this.handleClick = this.handleClick.bind(this);
    }

handleClick = () => {
    this.props.sayHello("I just went through the reducer. Redux champ right here!")
}

render(){

    const propsStyle = {
        color: "red"
    }


    return(
        <div className='large-container'>
            
            <FuncComp styleProps={this.propsStyle} />

           <Link to='routea'> <h1>Click here to experience the joys of routing</h1></Link>

           
           <button onClick={(e) => this.handleClick(e.target.value)}>Use the Reducer</button>

            <h4>{this.props.greeting}</h4>

            <Link to='axiosdemo'>Click here to experience componentDidMount, axios, promises,
            and read about John Wayne movies at the same time.</Link>

            <CompWithProps props="hi there" />

            <CreateDog />

        </div>
    )
}
}

function mapStateToProps(state){
       
  return state
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        sayHello: sayHello
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassComp);