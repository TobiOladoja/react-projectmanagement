import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

export class CreateProject extends Component {
  state = {
    title: '',
    content: ''
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
    this.props.createProject(this.state);
  };
  render() {
    return (
      // Contain all material in a central column
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Create New Project</h5>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Project Content</label>
            <textarea
              id='content'
              className='materialize-textarea'
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
