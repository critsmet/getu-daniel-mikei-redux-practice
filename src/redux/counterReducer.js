let defaultState = {counter: 0}

export const counterReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'increment':
      return {counter: state.counter + 1}
    default:
      console.log("YOU PASSED IN AN ACTION WITH A TYPE THAT DIDN'T MATCH ANY OF THE CASES");
      return state
      break;
  }
}
