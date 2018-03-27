import { combineReducers } from 'redux';
import peliculasPopulares from './peliculasPopulares';
import pelicula from './pelicula';
import recomendacion from './recomendacion';
const rootReducer = combineReducers({
  peliculasPopulares,
  pelicula,
  recomendacion
});

export default rootReducer;
