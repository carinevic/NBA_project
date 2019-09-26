
const initState = {
    projects: [
        {id:'1', title:'help me pass', content:'blalalalla'},
        {id:'2', title:'help me pass', content:'blalalalla'},
        {id:'3', title:'help me pass', content:'blalalalla'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
            case 'CREATE_PROJECT_Error':
                console.log('created project error', action.err)
                return state;
                default: 
                return state

    }
    

}
export default projectReducer;