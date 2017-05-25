import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Feeds from '../components/feeds';

function mapStateToProps(store) {
  console.log(store);
  return {
    lessons: store.lessonList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ }, dispatch);
}

const FeedListContainer = connect(mapStateToProps, mapDispatchToProps)(Feeds);
export default FeedListContainer;