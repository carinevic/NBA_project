import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectAction'

 class CreateProject extends Component {
    render() {
        return (
            <div>
              hello from me  
            </div>
        )
    }
}
const mapDispatchTpProps = (dispatch) =>{
    return{
        createProject: (project) => dispatch(createProject(project))
    }

}

export default connect(null, mapDispatchTpProps) (CreateProject);