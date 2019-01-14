import React from 'react';
import { HashRouter, BrowserRouter, MemoryRouter, Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function RoutersList({ routers }) {
  return routers.map(params => {
    if (typeof params.redirect === 'string') {
      return (
        <Route
          exact
          key={params.key || params.path}
          path={params.path}
          render={() => <Redirect to={params.redirect} />}
        />
      );
    }
    return <Route exact key={params.key || params.path} {...params} />;
  });
}

class RouterLoader extends React.Component {
  router;

  constructor(props) {
    super(props);
    switch (props.routerType) {
      case 'HashRouter':
        this.router = HashRouter;
        break;
      case 'BrowserRouter':
        this.router = BrowserRouter;
        break;
      case 'MemoryRouter':
        this.router = MemoryRouter;
        break;
      case 'Route':
        this.router = Router;
        break;
      default:
        this.router = HashRouter;
        break;
    }
  }

  render() {
    const { onlyRouters, routers, ...rest } = this.props;
    if (onlyRouters) {
      return (
        <Switch>
          <RoutersList routers={routers} />
        </Switch>
      );
    }
    return (
      <this.router {...rest}>
        <div>
          <Switch>
            <RoutersList routers={routers} />
          </Switch>
        </div>
      </this.router>
    );
  }
}

RouterLoader.propTypes = {
  onlyRouters: PropTypes.bool,
  routers: PropTypes.array.isRequired,
  routerType: PropTypes.oneOf(['HashRouter', 'BrowserRouter', 'MemoryRouter', 'Router']),
};

export default RouterLoader;
