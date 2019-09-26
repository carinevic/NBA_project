

export const createProject = (project) =>{
    return (dispatch, getState,{getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('nbap').add({
            ...project,
            authorFirstName:'carine',
            authorLastName: 'terry',
            authorId: 12345,
            createAt: new Date()
        }).then(()=>{
            dispatch({type: 'CREATE_PROJECT', project});

        }).catch((err) =>{
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })

       

    }
}