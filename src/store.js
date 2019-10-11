import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';

import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
//Reducers
import notifyReducer from './reducers/notifyReducer';

const firebaseConfig = {
    apiKey: "",
    authDomain: "reactclientpanel-e018e.firebaseapp.com",
    databaseURL: "https://reactclientpanel-e018e.firebaseio.com",
    projectId: "reactclientpanel-e018e",
    storageBucket: "reactclientpanel-e018e.appspot.com",
    messagingSenderId: "627407961459",
    appId: "1:627407961459:web:2d2aec8ddb0ff760205906",
    measurementId: "G-1JFYL2SDGY"
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
    firestore: firestoreReducer,
    notify: notifyReducer
})

//Create initial State
const initialState = {};

// Create store
const store = createStoreWithFirebase(rootReducer,initialState,compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
