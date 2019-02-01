import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import PropTypes from 'prop-types';

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import ToolBar from './ToolBar';

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  render() {
    const { events, generateRandomBookings } = this.props;
    return (
      <React.Fragment>
        <ToolBar generateRandomBookings={generateRandomBookings} />
        <BigCalendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "90vh" }}
      />
      </React.Fragment>
    );
  }
}

Calendar.propTypes = {
  events: PropTypes.array.isRequired,
  generateRandomBookings: PropTypes.func.isRequired
}

export default Calendar;