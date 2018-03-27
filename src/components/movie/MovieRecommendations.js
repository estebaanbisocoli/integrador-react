import React from 'react';
import { Section } from '../Section';
const MovieRecommendations = ({ recommendations }) => {
  return <Section sectionTitle="Peliculas Similares" {...recommendations} />;
};

export default MovieRecommendations;
