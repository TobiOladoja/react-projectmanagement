export const createProject = project => {
  // Thunk allows you to return a function
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make a sync call to database
    dispatch({ type: 'CREATE_PROJECT', project: project });
  };
};
