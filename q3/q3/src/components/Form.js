import React from 'react';
import axios from '../services';

export class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    preferredJobTitle: '',
    yearsOfExperience: 0,
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.put('/me/profile.json', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      birthDate: this.state.birthDate,
      preferredJobTitle: this.state.preferredJobTitle,
      yearsOfExperience: this.state.yearsOfExperience
    }).then(res=>res.status === 200 ? alert('submitted!') : alert('failed to submit'))
    
  }

  handleChange = key => e => {
    this.setState({
      [key] : e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input onChange={this.handleChange('firstName')} required value={this.state.firstName} type="text" name="firstName" />
        </label>
        <label>
          Last Name:
          <input onChange={this.handleChange('lastName')} required value={this.state.lastName} type="text" name="lastName" />
        </label>
        <label>
          Email:
          <input onChange={this.handleChange('email')} required value={this.state.email} type="text" name="email" />
        </label>
        <label>
          Birth Date:
          <input onChange={this.handleChange('birthDate')} value={this.state.birthDate} type="text" name="birthDate" />
        </label>
        <label>
          Preferred Job Title:
          <input onChange={this.handleChange('preferredJobTitle')} value={this.state.preferredJobTitle} type="text" name="preferredJobTitle" />
        </label>
        <label>
          Years of Experience:
          <input onChange={this.handleChange('yearsOfExperience')} value={this.state.yearsOfExperience} type="number" name="yearsOfExperience" />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}