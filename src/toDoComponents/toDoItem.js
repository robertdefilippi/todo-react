import React, {Component} from 'react';
import {ListGroupItem, Button} from 'react-bootstrap';


// These are the individual <li> items which live on the to-do list
export default class ToDoItem extends Component {
    constructor(props) {
        super(props);

        this.toDoisDone = this.toDoisDone.bind(this);
        this.removeToDoItem = this.removeToDoItem.bind(this);
    }

    toDoisDone(e) {
        this.props.completeToDoItem(this.props.uniqueID);


    }

    removeToDoItem(e) {
        this.props.deleteToDoItem(this.props.uniqueID);

    }

    render() {
        return (
            <ListGroupItem style={{
                'padding-right': '10px',
                'fontSize': '24px',
                'textDecoration': this.props.completed ? 'line-through' : ''
            }}>

                {this.props.toDoWhat + " "}

                <Button style={{'margin-left': '10px'}}
                        className="pull-right"
                        onClick={this.toDoisDone}>
                        Done
                </Button>

                <Button className="pull-right"
                        onClick={this.removeToDoItem}>
                    Delete
                </Button>
                
            </ListGroupItem>
        )
    }
}