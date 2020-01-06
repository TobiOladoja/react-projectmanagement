import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id} </span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit hic at
            dolores, quae placeat ea neque sed excepturi suscipit repudiandae
            tenetur cum quo temporibus laborum praesentium velit optio vel
            minus.
          </p>
        </div>
        <div className='card-action gret lighten-4 grey-text'>
          <div>Posted By The Tobi Guy</div>
          <div>2nd November, 4pm</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
