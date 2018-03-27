export default (
  state = {
    movies: [],
    loading: false,
    error: null,
    link: ''
  },
  action
) => {
  switch (action.type) {
    case 'UPDATE_POPULAR_MOVIES':
      if (action.data.length > 6) {
        return {
          ...state,
          movies: action.data,
          loading: false,
          error: null,
          link: '/popular'
        };
      } else {
        return {
          ...state,
          movies: action.data,
          loading: false,
          error: null,
          link: null
        };
      }

    case 'REQUEST_POPULAR_MOVIES':
      return { ...state, loading: true };
    case 'FAIL_POPULAR_MOVIES':
      return { ...state, loading: false, error: action.error, link: '' };
    default:
      return state;
  }
};
