import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from '../components/Section';
import { getPopularSeries } from '../api/moviedbapi';

function mapStateToProps({ seriesPopulares }) {
  return {
    sectionTitle: 'Series Populares',
    series: seriesPopulares.series,
    loading: seriesPopulares.loading,
    error: seriesPopulares.error,
    link: seriesPopulares.link
  };
}

const loadSeries = () => {
  return dispatch => {
    dispatch({ type: 'REQUEST_POPULAR_SERIES' });
    return get;
  };
};
class SeriesPopulares extends Component {
  render() {
    return (
      <Section
        sectionTitle={this.props.sectionTitle}
        items={this.props.series}
        link={this.props.link}
        loading={this.props.loading}
        error={this.props.error}
      />
    );
  }
}

export default connect(mapStateToProps)(SeriesPopulares);
