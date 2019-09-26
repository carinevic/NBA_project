import React, { Component } from 'react';
import axios from 'axios';
import { URL_EMAIL} from "../Utils/paths";
import { connect } from 'react-redux';


class Subscription extends Component {

    state = {
        email :'',
        error: false,
        success: false,
        alreadyIn: false
        
    }

    clearMessages = () =>{
        setTimeout(()=> {
            this.setState({
                error: false,
                success: false,
                alreadyIn: false
            })

        },300)
    }
    saveSubscription = (email) => {
        axios.get(`${URL_EMAIL}?email=${email}`)
        .then(response =>{
            if(!response.data.length){

                axios(URL_EMAIL,{
                    method: 'POST',
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    data:JSON.stringify({email})
                }).then(response => {
                    this.setState({
                        email: '',
                        success: true
                    });
                    this.clearMessages();
                })

            }else{
                this.setState({
                    email: '',
                    alreadyIn: true
                })

            }

        })
    }
handleSubmit =(event) => {
    event.preventDefault();
    let email = this.state.email;
  let regex =  /\S+@\S+\.\S+/;

  if(regex.test(email)){
      this.saveSubscription(email)

  }else{
      this.setState({error: true})
  }
    this.clearMessages();
  
}

    onChangeInput = (event) => {
        this.setState({
            email: event.target.value

        })

    }
    render() {
        const { email } = this.state;
        const state = this.state;
       
        return (
            <>
    <div className="subcribe_panel">
        <h3>Subscript to vote </h3>
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                value={this.state.email}
                placeholder="email@yahoo.com"
                onChange={this.onChangeInput}>
                </input>
                <div className={state.error ? "error show": "error"}>check your email</div>
                <div className={state.success ? "success show": "success"}>thanks you</div>
                <div className={state.alreadyIn ? "success show": "success"}>your alreadu login</div>
                     {email}
               
            </form>
        </div>
        <small>
        t vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volupta
        </small>

    </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return{
      
    }
}

export default connect(mapStateToProps)(Subscription);
