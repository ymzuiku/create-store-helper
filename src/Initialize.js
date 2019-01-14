import React, { Component } from 'react';
import { Provider } from 'react-redux';
import RouterLoader from 'src/components/RouterLoader';
import routers from 'src/routers';
import store from 'src/global/store';

class Initialize extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterLoader routers={routers} />
      </Provider>
    );
  }
}

export default Initialize;
