import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { getFeeds } from '../actions';
import { connect } from 'react-redux';
import FeedListContainer from './FeedListContainer';

class MainApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <FeedListContainer />
    );
  }
}

function mapStateToProps(store) {
  return {
    loader: store.loader.status
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFeeds }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Feeds);