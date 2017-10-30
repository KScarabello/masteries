import React, {Component} from 'react';
import axios from 'axios';


export default class CreateDog extends Component{
    constructor(props){
        super(props)

        this.state = {

            name: '',
            activityLevel: '',
            description: ''
        }

        this.newDog = this.newDog.bind(this)
    }

newDog() {

    var doggy = {
        name: this.state.name,
        activityLevel: this.state.activityLevel,
        description: this.state.descriptione
    }



     axios.post('https://localhost:3001/api/createdog', doggy)
            .then(response => {
                return response.data[0]
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