import { combineReducers } from 'redux';
import peliculasPopulares from './peliculasPopulares';
import pelicula from './pelicula';
import recomendacion from './recomendacion';
import seriesPopulares from './seriesPopulares';
const rootReducer = combineReducers({
  peliculasPopulares,
  pelicula,
  recomendacion,
  seriesPopulares
});

export default rootReducer;
