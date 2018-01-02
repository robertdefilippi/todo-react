import React, {Component}  from 'react';
import {ListGroup} from 'react-bootstrap';
import ToDoItem from './toDoItem';


// This is the container for all the individual items in the to-do list
export default class ToDoListOfItems extends Component {

    render() {

        // Use map() to iterate through each item in the to-do list, creating new elements in the list container
        return (
            <ListGroup>
                {this.props.toDoItems.map(toDo => (
                    <ToDoItem style={{'height': '50px'}}
                        key={toDo.uniqueID}
                        uniqueID={toDo.uniqueID}
                        toDoWhat={toDo.toDoWhat}
                        completed={toDo.isDone}
                        deleteToDoItem={this.props.deleteToDoItem}
                        completeToDoItem={this.props.completeToDoItem}
                    />
                ))}
            </ListGroup>

        )
    }
}
