import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
class MainNav extends Component {
  constructor() {
    super();
    this.state = {
      login: true
    };
  }
  render() {
    return (
      <Menu fluid size="massive">
        <Container>
          <Menu.Item header>React Movie DB</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default MainNav;
