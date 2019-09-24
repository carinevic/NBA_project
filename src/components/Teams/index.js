import React, { Component } from 'react';
import axios from 'axios';
import { URL_TEAMS} from '../Utils/paths';
import {Link} from 'react-router-dom';
import {
    CSSTransition,
    TransitionGroup } from 'react-transition-group';


 class Teams extends Component {
     state ={
         teams:[],
         filtered: [],
         keyword:''
     }
     componentDidMount(){
         axios.get(URL_TEAMS)
         .then(response =>{
             this.setState ({ 
             teams: response.data,
             filtered: response.data
         })
        })
     }

     renderList =(filtered) =>(
         filtered.map((item,index)=>(
             <CSSTransition
             key={index}
             timeout={500}
             classNames="fade"
             
             >
                <Link to={`/team/${item.name}`}
                className="team_item"
                
                >
                    <img alt={item.name} src={`/images/teams/${item.logo}`}/>
                </Link>

             </CSSTransition>

         ))

     )
    render() {
        return (
            <div className="teams_component">
                <div className="teams_input">
                    <input
                    type="text"
                    value={this.state.keyword}
                    placeholder="Search for a team"
                    />
                    </div> 
                    <div className="team_container">
                        <TransitionGroup component ="span">
                            {this.renderList(this.state.filtered)}

                        </TransitionGroup>
                    </div>
             
            </div>
        );
    }
}

export default Teams;
