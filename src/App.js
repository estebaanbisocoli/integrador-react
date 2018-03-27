import React, { Component } from 'react';

import { MainNav, Content } from './components/layout';
class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <Content />
      </div>
    );
  }
}

export default App;
