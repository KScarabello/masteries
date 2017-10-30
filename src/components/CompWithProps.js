import React, {Component} from 'react';

export default class CompWithProps extends Component{
    constructor(props){
        super(props)


    }

    render(){
        return(
            <div> {this.props.props}</div>


        )




    }

   
}