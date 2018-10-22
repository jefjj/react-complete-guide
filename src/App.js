import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';
import UserInput from './UserInput/UserInput';
import './UserInput/UserInput.css';
import UserOutput from './UserOutput/UserOutput';
import './UserOutput/UserOutput.css';

class App extends Component {
  state = {
    person: [
      { name: 'Jeferson Costa', age: 38 },
      { name: 'Bruna', age: 35 },
      { name: 'Pedro Costa', age: 7 }
    ],
    userName: 'Jeferson Costa'
  };

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: 38 },
        { name: 'Bruna P.', age: 35 },
        { name: 'Pedro C.', age: 7 }
      ]
    });
  };

  changeNameHandler = (event) => {
    this.setState({
      person: [
        { name: 'Jeferson Costa', age: 38 },
        { name: event.target.value, age: 35 },
        { name: 'Pedro C.', age: 7 }
      ]
    });
  };

  changeUserNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  };

  render() {
    const  styles = {
      backgroundColor: '#ffffff',
      font: 'inherit',
      padding: '8px',
      border: '1px solid blue',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          className={styles}
          onClick={ this.switchNameHandler.bind(this, 'Jeferson J. Costa') }>SWITCH NAME</button>
        <Person 
          name={ this.state.person[0].name } 
          age={ this.state.person[0].age }
          click={ this.switchNameHandler.bind(this, 'Jeferson José Costa Pereira') }/>
        <Person 
          name={ this.state.person[1].name } 
          age={ this.state.person[1].age }
          changed={ this.changeNameHandler }/>
        <Person 
          name={ this.state.person[2].name } 
          age={ this.state.person[2].age }/>
        <hr/>
        <UserInput
          userName={ this.state.userName } 
          changed={ this.changeUserNameHandler }/>
        <UserOutput 
          user="Jeferson C." 
          text="My little text."/>
        <UserOutput 
          user={ this.state.userName } 
          text="My little text two."/>
      </div>
    );
  }
}

export default App;
