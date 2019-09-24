import React, { Component } from 'react';
import axios from 'axios';
import SliderWidget from '../Utils/slider';
import { URL_HOME } from '../Utils/paths';
import Subscription from '../Utils/Subscript';
import Blocks from './blocks';
import Poll from './Poll';

 class Home extends Component {
    state={
        home: ''
    }
    componentDidMount(){
        axios.get(URL_HOME)
        .then(response => {
            console.log(response.data);
            this.setState({home:response.data})
        })

    }
    render() {
        return (
            <div>
               
             < SliderWidget slides={this.state.home.slider} />
             <Subscription />
             <Blocks blocks={this.state.home.blocks} />
             <Poll />
            </div>
        );
    }
}

export default Home;

