import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux'; // Connecting dashboard component with the redux store.

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { projects } = this.props; // Pass this to the Project Lists
    return (
      <div className='dashboard container'>
        <div className='row'>
          <div className='col s12 m6'>
            <ProjectList projects={projects} />
          </div>
          <div className='col s12 m5 offset-m1'>
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // pass this function to connect
  return {
    projects: state.project.projects
  };
};

export default connect(mapStateToProps)(Dashboard);
