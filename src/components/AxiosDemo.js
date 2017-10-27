import React, {Component} from 'react';
import axios from 'axios';

export default class AxiosDemo extends Component{
    constructor(props){
        super(props)
    this.state = {
        axiosInfo: []
    }

    }
    componentDidMount(){

        axios.get('https://api.themoviedb.org/3/discover/movie?with_cast=4165&api_key=0d472492ad46b03272577e1151517156')
       .then((res) => {
           console.log(res.data);
        
           this.setState({
              axiosInfo : res.data.results
           })


    }
    
}



render() {

    const bradPittMovies = this.state.axiosInfo.map((movie, i))

    return (






    )




}



    }

}