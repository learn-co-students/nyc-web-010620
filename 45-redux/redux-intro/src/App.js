import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { likeActionCreator, dislikeActionCreator } from './actionCreators'


 function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}



const App = props => {

  return (
    <div className={"App" + (props.darkMode ? " dark" : "")}>
      <button onClick={props.toggleDark}>Dark mode</button>
      <h3>{props.text}</h3>
      <input 
        name="text" 
        value={props.text} 
        onChange={event => props.changeText(event.target.value)}/>
      <button onClick={props.addText}>Add!</button>

      <h4>{props.likes} likes</h4>
      <button onClick={props.dislike}>
        Dislike <span role="img" aria-label="thumbs down">👎</span>
      </button>
      <button onClick={props.like}>
        Like<span role="img" aria-label="thumbs up">👍</span>
      </button>
      {
        props.thangs.map((thang, index) => <h1 key={index} >{thang}</h1>)
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    likes: state.likes,
    thangs: state.thangs,
    text: state.text,
    darkMode: state.darkMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    like: () => dispatch(likeActionCreator()),
    dislike: () => dispatch(dislikeActionCreator()),
    toggleDark: () => dispatch({type: 'TOGGLE_DARK'}),
    addText: () => dispatch({ type: 'ADD_TEXT'}),
    changeText : (textValue) => dispatch({ type: 'CHANGE_TEXT', payload: textValue})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


/************************************* FROM BEFORE REDUX !!!! *************************************/
// state = {
//   likes: 0,
//   text: '',
//   darkMode: false,
//   thangs: []
// }

// dispatch = (type, payload) => {
//   console.log('dispatching', type)
//   const newState = this.reducer(type, payload)
//   // set the state 
//   this.setState(newState)
// }

// reducer = (type, payload) => {
//   // calculate the new state
//   let newState = {...this.state}
//   switch(type){
//     case 'LIKE':
//        newState = { ...newState, likes: this.state.likes + 1 }
//       break;
//     case 'DISLIKE':
//       newState = { ...newState, likes: this.state.likes - 1 }
//       break;
//     case 'TOGGLE_DARK':
//       newState = { ...newState, darkMode: !this.state.darkMode }
//       break;
//     case 'CHANGE_TEXT':
//       newState = { ...newState, text: payload }
//       break;
//     case 'ADD_TEXT':
//       newState = { 
//         ...newState,
//         text: '',
//         thangs: [this.state.text, ...this.state.thangs]
//       }
//       break;
//     default:
//       break;
//   }
//   return newState;
// }
