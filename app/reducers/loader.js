const initialState = {
  status: false
}
const loader = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case 'START_LOADING':  
      newState = {...state, ...action.payload}
    case 'STOP_LOADING':  
      newState = {...state, ...action.payload}
    default:
  }
  return newState;
}

export default loader;