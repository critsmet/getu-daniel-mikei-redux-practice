import React from 'react';
import { connect } from 'react-redux'
import './App.css';

import { increment } from './redux/actionCreators'

class App extends React.Component {

  handleClick = () => {
    this.props.increment()
  }

  render(){
    //PROPS: {someProp: "someInfo", counter: 0}
    console.log(this.props);
    return(
      <div className="App">
        <p>Counter: {this.props.counter}</p>
        <button onClick={this.handleClick}> Increment</button>
      </div>
    )
  }
}

function mSTP(state){
  return {
    counter: state.counter
  }
}

//always do it like this!
function mDTP(dispatch){
  return {
    increment: () => dispatch(increment())
  }
}

export default connect(mSTP, mDTP)(App);
