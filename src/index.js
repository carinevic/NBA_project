import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore} from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';


const store = createStore(rootReducer,
    (

     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
     reactReduxFirebase(fbConfig),
     reduxFirestore(fbConfig,{attachAuthIsReady: true})
     )

);

ReactDOM.render(
    <Provider store={store}>
    <Routes />
    </Provider>
, document.getElementById('root'));




