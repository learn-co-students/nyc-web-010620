import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App'; 
import { reducer } from './reducer'


const store = createStore(reducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



/***************************    WITH JUUUUUST REDUX  ***************************/
// console.log('getting da state', store.getState())

// // store.dispatch({type: 'LIKE'})
// // store.dispatch({type: 'LIKE'})
// // store.dispatch({type: 'LIKE'})


// // console.log('getting da state', store.getState())

// // store.dispatch({type: 'DISLIKE'})

// // console.log('getting da state', store.getState())


// store.dispatch({ type: 'CHANGE_TEXT', payload: 'b-a-n-a-n-a-s'})
// store.dispatch({ type: 'TOGGLE_DARK'})
// store.dispatch({ type: 'ADD_TEXT'})

// console.log(store.getState())