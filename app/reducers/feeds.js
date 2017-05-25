export default function counter(state = [], action = {}) {
  let newState = state;
  console.log(action);
  switch (action.type) {
    case 'SET_FEEDS':
      return [...state, ...action.payload];
    default:
      return newState;
  }
}