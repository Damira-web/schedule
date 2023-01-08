import { Component } from "react";
import todo from './todo.jpg';

export class Schedule extends Component {
    state = {
        userInput: '',
        schedule: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input) {
        if (input === '') {
            alert ("Please, enter your agenda")
        }
        else {
            let listArray = this.state.schedule;
            listArray.push(input);
            this.setState({schedule: listArray, userInput:''})
        }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.schedule;
        listArray = [];
        this.setState ({schedule: listArray});
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text"
                placeholder="What's on your agenda for today?"
                onChange={(e) => this.onChangeEvent(e.target.value)}
                value={this.state.userInput}/>
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.userInput)} className="btn add">ADD</button>
            </div>
            <ul>
                {this.state.schedule.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}><img src={todo} alt="todo" width="40px"/>{item}</li>
                ))}
            </ul>
            <div className="container">
                <button onClick={() => this.deleteItem()} className="btn delete">DELETE</button>
            </div>
            </form>
        )
    }
}