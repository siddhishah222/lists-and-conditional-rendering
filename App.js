import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
 state={
  userInput:''
 } // property

  inputChangedHandler=(event)=>{
    this.setState({userInput:event.target.value});
  }       //method
 
  deleteCharHandler=(index)=>
  {
    const text= this.state.userInput.split('');
    text.splice(index,1);

    const updatedText= text.join('');
    this.setState({userInput:updatedText});
  }
  render(){
  //const charList= this.state.userInput.map(ch=>{ BUT MAP IS NOT WORKING COZ STRINGS ARE NOT JS Arrays, to turn it in JS array, use split
  const charList= this.state.userInput.split('').map((ch,index)=>{
        return <Char
         character={ch} 
         key={index}
         clicked={()=>this.deleteCharHandler(index)}/>;  //property call in char component.js
    });
     
    return (
    <div className="App">
      <h1>Welcome to My App</h1>
     <hr />
     <input 
      type="text" 
      onChange={this.inputChangedHandler} 
      value={this.state.userInput}
      />
      <p>{this.state.userInput}</p> 
      <Validation inputlength={this.state.userInput.length}/>
      {charList}
    </div>//para has a dynamic content, this.state.userinput
    );
  }

};

export default App;
