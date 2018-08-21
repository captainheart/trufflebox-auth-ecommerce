import React, { Component } from 'react'

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      profilePicture: '',
      userType: 'Buyer'
    }
  }

  onInputChange(event) {
    console.log(event.target.id);
    let newState={};
    newState[event.target.id] = event.target.value;
    this.setState(newState)
  }

  onRoleChange(event) {
    console.log(event.target.value);
    this.setState({
      userType: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.name.length < 2)
    {
      return alert('Please fill in your name.')
    }

    this.props.onSignUpFormSubmit(
      this.state.name,
      this.state.email,
      this.state.phoneNumber,
      this.state.profilePicture,
      this.state.userType
    );
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <input id="name" type="text" value={this.state.name} onChange={this.onInputChange.bind(this)} placeholder="Name" required/>
          <input id="email" type="email" value={this.state.email} onChange={this.onInputChange.bind(this)} placeholder="Email" required/>
          <input id="phoneNumber" type="text" value={this.state.phoneNumber} onChange={this.onInputChange.bind(this)} placeholder="Phone Number" required/>
          <input id="profilePicture" type="text" value={this.state.profilePicture} onChange={this.onInputChange.bind(this)} placeholder="Profile Image" required/>
          <br/>
          <label htmlFor="role">Your Role:</label>
          <label>
            <input type="radio" value="Buyer" checked={this.state.userType === 'Buyer'} onChange={this.onRoleChange.bind(this)} />
            Buyer
          </label>

          <label>
            <input type="radio" value="Seller" checked={this.state.userType === 'Seller'} onChange={this.onRoleChange.bind(this)} />
            Seller
          </label>

          <label>
            <input type="radio" value="Arbiter" checked={this.state.userType === 'Arbiter'} onChange={this.onRoleChange.bind(this)} />
            Arbiter
          </label>

          <br />

          <button type="submit" className="pure-button pure-button-primary">Sign Up</button>
        </fieldset>
      </form>
    )
  }
}

export default SignUpForm
