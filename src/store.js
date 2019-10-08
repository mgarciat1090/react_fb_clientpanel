import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';

import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
//Reducers
// @todo

const firebaseConfig = {
    apiKey: "AIzaSyDqPEMrRqk5dOY5glY6pbH5q_FDjbGFhPo",
    authDomain: "reactclientpanel-e018e.firebaseapp.com",
    databaseURL: "https://reactclientpanel-e018e.firebaseio.com",
    projectId: "reactclientpanel-e018e",
    storageBucket: "reactclientpanel-e018e.appspot.com",
    messagingSenderId: "627407961459",
    appId: "1:627407961459:web:77e62f1043445036205906",
    measurementId: "G-0S263KC1NL"
}

//react redux firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

// init firebase instance
firebase.initializeApp(firebaseConfig);
//init firestore
//const firestore = firebase.firestore();


//Add reactReduxFireabse enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase,rrfConfig),
    reduxFirestore(firebase)
)(createStore)

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

//Create initial State
const initialState = {};

// Create store
const store = createStoreWithFirebase(rootReducer,initialState,compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;