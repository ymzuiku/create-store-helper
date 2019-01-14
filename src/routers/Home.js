import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import * as sagas from 'src/actions/sagas';

function mapStateToProps(state) {
  return {
    photos: state.getIn(['user', 'photos']),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sagaOfUserGetPhotos() {
      dispatch(sagas.sagaOfUserGetPhotos());
    },
  };
}

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Home extends React.PureComponent {
  render() {
    const { photos, sagaOfUserGetPhotos } = this.props;
    return (
      <div>
        <header>
          {photos && JSON.stringify(photos)}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Button onClick={sagaOfUserGetPhotos} margin="1em">
            Touch Me
          </Button>
        </header>
      </div>
    );
  }
}

Home.propTypes = {
  photos: PropTypes.object,
  sagaOfUserGetPhotos: PropTypes.func,
};

export default Home;
