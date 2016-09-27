const defaultState = [
  {
    title: 'Titanic',
    description: 'Amaxing movie',
  },
  {
    title: 'I am legend',
    description: 'You gotta watch it',
  }
];


export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, {title: action.title, description: action.description }];
    default:
      return state;
  }
};
