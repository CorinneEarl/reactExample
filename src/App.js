import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  handleClick(){
    this.setState({chaos : !(this.state && this.state.chaos)})
  }

  dateChanged(event){
    this.setState({date: event.target.value})
  }

  nameChanged(event){
    this.setState({name: event.target.value});
  }

  submitEvent(){
    $.ajax({
            method: 'POST', 
            url:'http://localhost:3001/api/event',
            contentType: 'application/json',
            data: JSON.stringify({
                name: this.state.name,
                date: this.state.date
              })
          })
          .done(function(result){
            console.log(result)
          })
  }
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Create an event</h2>
          <div>
            <label htmlFor='eventTitle'>Describe your event </label>
            <input name='eventTitle' value={this.state && this.state.name ? this.state.name : "" } onChange={this.nameChanged.bind(this)}/>
          </div>
          <label style={{color: 'black'}} htmlFor='eventDate'>When is it? </label>
          <input type='date' name='eventDate' value={this.state && this.state.date ? this.state.date : undefined} onChange={this.dateChanged.bind(this)}/>
          <button onClick={this.submitEvent.bind(this)}>Submit Event</button>
        </div>
      </div>
    );
  }
}

export default App;
