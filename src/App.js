import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';



//TODO: 4. change the onclick to go to props instead of state. 
//5. profit 
class App extends Component {
  render() {
    return (
      <div className="App">
      
          <div>Age: <span>{this.props.age}</span> <br/></div>
          <button onClick={this.props.onAgeUp}>Age Up</button>
          <button onClick={this.props.onAgeDown}>Age Down</button>
      </div>
    );
  }
}


//TODO: 3. create mapstatetoprops, mapdispatchtoprops. 
const mapDispatchToProps = (dispatch) =>{
  return {
    onAgeUp:() => dispatch({type: 'AGE_UP'}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN'})
  }
};


const mapStateToProps =(state) =>{
  return {
    age: state.age
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
