import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import { MovieRoute, Main } from '../routes';
import styled from 'styled-components';
const MyContainer = styled(Container)`
  margin-top: 5px;
`;
const Content = props => {
  return (
    <MyContainer>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/movie/:movieId" component={MovieRoute} />
      </Switch>
    </MyContainer>
  );
};

Content.propTypes = {};

export default Content;
