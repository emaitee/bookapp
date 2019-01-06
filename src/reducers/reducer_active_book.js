export default function(state = null, action) {
  switch (action.type) {
    case 'SELECT_BOOK':
      return action.book;
    default:
      return state;
  }
}
