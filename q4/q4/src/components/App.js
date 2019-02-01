import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar';
import moment from "moment";

class Event {
  constructor(start, end, title, allDay) {
    this.start = start;
    this.end = end;
    this.title = title;
    this.allDay = allDay;
  }
}

class App extends Component {
  state = {
    events: []
  };

  generateRandomBookings = () => {
    const events = [];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const daysInMonth = moment().daysInMonth();
    const numberOfBookings = Math.floor(Math.random() * daysInMonth);
    const arrOfDays = [];

    //populated arrayOfDays
    for(let i=0;i<=numberOfBookings;i++) {
      let dayOfMonth = Math.floor(Math.random() * daysInMonth + 1) ;
      if(!arrOfDays.includes(dayOfMonth)) {
        arrOfDays.push(dayOfMonth)
      }
    }

    const createEvent = (i) => {
      const day = arrOfDays[i];
      const newDate = new Date(year, month, day);
      return new Event(newDate,newDate,'booking', true);
    }
  
    for(let i=0;i<=arrOfDays.length;i++) {
      const booking = createEvent(i);
      events.push(booking)
    }

    this.setState({
      events: events
    })
  }

  render() {
    return (
      <div className="App">
        <Calendar 
        events={this.state.events}
        generateRandomBookings={this.generateRandomBookings}
        />
      </div>
    );
  }
}

export default App;
