const intialValue = {
  loanApply: 'false',
};

function loadReducer(state = intialValue, action) {
  switch (action.type) {
    case 'Apply':return {loanApply:'true'}
    default :return state;
  }
}

export default loadReducer;
