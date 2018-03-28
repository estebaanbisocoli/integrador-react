export default (
  state = {
    series: [],
    loading: false,
    error: null,
    link: ''
  },
  action
) => {
  switch (action.type) {
    case 'UPDATE_POPULAR_SERIES':
      return {
        ...state,
        loading: false,
        series: action.series
      };
  }
  return state;
};
