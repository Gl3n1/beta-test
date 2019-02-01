import React from 'react';
import styled from 'styled-components';

const ToolBar = props => (<BookingsButton onClick={props.generateRandomBookings}>Generate Random Bookings</BookingsButton>)

const BookingsButton = styled.button`
  padding: 20px;
`

export default ToolBar;