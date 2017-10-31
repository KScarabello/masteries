import React, {Component} from 'react';
import axios from 'axios';


export default class CreateDog extends Component{
    constructor(props){
        super(props)

        this.state = {

            name: '',
            activity_level: '',
            description: ''
        }

        this.newDog = this.newDog.bind(this)
    }

newDog() {

    var doggy = {
        name: this.state.name,
        activity_level: this.state.activity_level,
        description: this.state.description
    }



     axios.post('http://localhost:3002/api/createdog', doggy)
            .then(response => {
                console.log("sent successfully")
            })

    }

render(){
    return(
        <div>
            <div>
                <textarea type="text" placeholder="dog breed name" onChange={(e) => this.setState({name: e.target.value})}> </textarea>
                <textarea type="text" placeholder="dog breed activity level" onChange={(e) => this.setState({activityLevel: e.target.value})}> </textarea>
                <textarea type="text" placeholder="dog breed description" onChange={(e) => this.setState({description: e.target.value})}></textarea>
                
            </div>

            <div>
                <button onClick={() => this.newDog()}></button>
            </div>
        </div>
    )

}

} 