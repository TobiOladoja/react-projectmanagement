import React, { Component } from 'react';

export class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };
  handleChange = e => {
    //   Update property - target id, so if it targets email then email will update,
    //   if password then password will be updated. Whichever input the user types into
    // will update. and use e.target.value so we can update the state with the value with
    //   whatever the target element is being changed with.
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    //   prevent default action of form being submitted and page being refreshed when pressed enter.container
    // console log logs in whats been done in handleChange as it updates state.
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      // Contain all material in a central column
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Sign Up</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' id='firstName' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='lastName'>LastName</label>
            <input type='text' id='lastName' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
