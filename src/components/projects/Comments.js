import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
    state ={
        title: '',
        content: ''


    }
    handleChange = (e) =>{
      this.setState({
          [e.target.id]:e.target.value

      })
    }
    handleSubmit = (e) =>{
     e.preventDefault();
     this.props.createProject(this.state)
    }
   render() {
       return (
           <div className="container">
           <form onSubmit={this.handleSubmit} className="white">
               <h5 className="grey-text-darken-3">comments</h5>
               <div className="input-field">
                   <label htmlFor="title">title</label>
                   <input type="title" id="title" onChange={this.handleChange} />
               </div>
               <div className="input-field">
                   <label htmlFor="content">content</label>
                   <input type="content" id="content" onChange={this.handleChange} />
               </div>
               <div className="input-field">
                   <button className="btn pink lighten-1 z-depth-0">like/dislike</button>

               </div>
               </form>
               
           </div>
       )
   }
}

const mapStateToProps = (state) => {
    return{
        projects: state.project.projects
    }
}
export default connect(mapStateToProps) (Comments)