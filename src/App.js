import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    persons: [
      { id: 'asf1', name: 'Jeferson Costa', age: 38 },
      { id: 'asf2', name: 'Bruna', age: 35 },
      { id: 'asf3', name: 'Pedro Costa', age: 7 }
    ],
    userName: 'Jeferson Costa',
    showPerson: false,
    textString: '',
    splitedTextString: []
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    });

    let person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    let persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  changeUserNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  };

  removePersonHandler = index => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    const showPerson = this.state.showPerson;

    this.setState({
      showPerson: !showPerson
    })
  };

  textStringChangeHandler = (event) => {
    this.setState({ textString: event.target.value });
    this.textStringSplitHandler(event.target.value);
  }

  textStringSplitHandler = (text) => {
    let charsList = text.split('');
    this.setState({ splitedTextString: charsList });
  }

  removeCharHandler = (index) => {
    let text = this.state.textString.split('');

    text.splice(index, 1);
    const updatedText = text.join('');

    this.setState({
      textString: updatedText
    });

    this.textStringSplitHandler(updatedText);
  };

  render() {
    const  styles = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      padding: '8px',
      border: '1px solid green',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPerson) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return (
              <Person 
                key={person.id}
                name={ person.name }  
                age={ person.age }
                removed={ () => this.removePersonHandler(index) }
                changed={ (event) => this.changeNameHandler(event, person.id) }/>
            );
          }) }
        </div>
      );

      styles.backgroundColor = 'red';
      styles[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    let charComponentsList = null;

    if(this.state.splitedTextString.length) {
      charComponentsList = this.state.splitedTextString.map((char, index) => {
        return (
          <Char 
            oneChar={char}
            key={index}
            clicked={() => this.removeCharHandler(index)}/>
        );
      });
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>
          <button 
            style={styles}
            onClick={ this.togglePersonHandler }>TOGGLE PERSON</button>
          { persons }
          
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

          <hr/>

          <input 
            type="text" 
            value={this.state.textString}
            onChange={this.textStringChangeHandler}/>
          <p>Length: {this.state.textString.length}</p>

          <Validation testStringSize={this.state.textString.length}/>

          { charComponentsList }
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
