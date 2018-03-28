import React from 'react';
import { Section } from '../Section';
const MovieRecommendations = ({ recommendations }) => {
  return (
    <Section
      sectionTitle="Peliculas Similares"
      items={recommendations.movies}
      {...recommendations}
    />
  );
};

export default MovieRecommendations;
