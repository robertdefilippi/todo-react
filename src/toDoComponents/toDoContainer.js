import React, {Component} from 'react';
import {Button, Navbar, FormControl} from 'react-bootstrap';

import ToDoListOfItems from './toDoListOfItems.js'

// The main container for the to-do app
// Will hold the to-do list component and the individual items

export default class ToDoContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toDoItems: [],
            toDoWhat: "" // This will be passed down to the ToDoItem
        };

        // The main methods needed to run the to-do list
        this.handleAddToDoItem = this.handleAddToDoItem.bind(this);
        this.handleChangeToDoItem = this.handleChangeToDoItem.bind(this);
        this.handleDeleteToDoItem = this.handleDeleteToDoItem.bind(this);
        this.handleCompleteToDoItem = this.handleCompleteToDoItem.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }

    handleAddToDoItem(e) {
        // Needed because of prevState below, which does
        // not exist until an item is added to the list
        e.preventDefault();

        // The variable to hold the information for the item
        let newToDoItem = {
            uniqueID: '_' + Math.random().toString(36).substr(2, 9),
            toDoWhat: this.state.toDoWhat,
            isDone: false

        };

        // The 'prevState' is a reference to the previous state and
        // you are able to access the previous state variables
        // Here 'prevState' is used so you can update the array of items
        // with a new item
        this.setState((prevState) => ({
                toDoItems: prevState.toDoItems.concat(newToDoItem),
                toDoWhat: ""

            })
        );
    }

    handleChangeToDoItem(e) {
        this.setState({
            toDoWhat: e.target.value

        });
    }

    // Remove a single item from toDoItems that has a specific ID and
    // return an array of updated items
    handleDeleteToDoItem(uniqueID) {

        // Return all elements in the toDoItems array that do not
        // have a specific uniqueID
        let updatedItemList = this.state.toDoItems.filter(toDo => {
            return toDo.uniqueID !== uniqueID;

        });

        // Concat updated item list to blank array
        this.setState({
            toDoItems: [].concat(updatedItemList)

        });
    }

    handleCompleteToDoItem(uniqueID) {

        let itemToMove = null;

        let updatedItemList = this.state.toDoItems.map(itemToChange => {
            if (itemToChange.uniqueID === uniqueID) {
                itemToChange.isDone = !itemToChange.isDone;

                // Host the object variables
                itemToMove = itemToChange;

            }

            return itemToChange;

        });

        let toDoIndex = updatedItemList.findIndex(toMove => toMove.uniqueID === itemToMove.uniqueID);

        if (itemToMove.isDone === true) {
            updatedItemList.push(updatedItemList.splice(toDoIndex, 1)[0]);
        } else {
            updatedItemList.splice(toDoIndex, 1);
            updatedItemList.splice(0, 0, itemToMove);
        }


        this.setState({
            toDoItems: [].concat(updatedItemList)
        });
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.handleAddToDoItem(e);

        }
    }

    render() {

        return (
            <div>
                <ToDoListOfItems
                    toDoItems={this.state.toDoItems}
                    deleteToDoItem={this.handleDeleteToDoItem}
                    completeToDoItem={this.handleCompleteToDoItem}
                />

                <Navbar style={{'maxWidth': '500px'}}>
                    <Navbar.Form style={{'maxWidth': '500px', 'paddingRight': '40px'}}>
                        <FormControl
                            onChange={this.handleChangeToDoItem}
                            value={this.state.toDoWhat}
                            onKeyPress={this.handleKeyPress}
                    />

                    {'  '}

                    <Button className="pull-right"
                            bsStyle="default"
                            onClick={this.handleAddToDoItem}
                            disabled={this.state.toDoWhat.length < 1}
                            placeholder='Add Item to To-Do List'>Add Item to List
                    </Button>
                </Navbar.Form>
            </Navbar>
    </div>
    )
        ;
    }
}
