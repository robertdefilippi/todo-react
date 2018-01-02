import React, {Component} from 'react';
import { Jumbotron } from 'react-bootstrap'
import './App.css';
import ToDoContainer from './toDoComponents/toDoContainer.js';

class App extends Component {
    render() {

        let containerStyle = {
            'display': 'flex',
            'justifyContent': 'center',
    };

        return (

            <div>
                <Jumbotron style={{'text-align': 'center'}}>
                    <h1 className="App-title">Welcome to my To-Do React App</h1>
                    <p>Add items to your to-do list with the button below</p>
                </Jumbotron>
                <div style={containerStyle}>
                    <ToDoContainer/>
                </div>

            </div>
        );
    }
}

export default App;
