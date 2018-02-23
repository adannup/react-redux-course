import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from '../components/User';
import Main from '../components/Main';
import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.changeUsername = this.changeUsername.bind(this);
  }

  changeUsername() {
    this.props.setName('Monica');
  }

  render() {
    return (
      <div className="container">
        <Main changeUsername={this.changeUsername} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

App.propTypes = {
  setName: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.userReducer,
  math: state.mathReducer,
});

const mapDispatchToProps = dispatch => ({
  setName: name => dispatch({ type: 'SET_NAME', payload: name }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
