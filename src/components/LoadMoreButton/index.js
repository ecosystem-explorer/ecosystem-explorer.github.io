import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { loadMore } from './../../ducks/ecosystems'


class LoadMoreButton extends React.Component {
  
  loadMore = () => {
    this.props.loadMore(this.props.topic)
  }
  
  render() {
    return <button disabled={this.props.isLoadingMore} onClick={this.loadMore}>load more...</button>
  }
}

LoadMoreButton.propTypes = {
  isLoadingMore: PropTypes.bool.isRequired,
  topic: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMore: (topic) => dispatch(loadMore(topic))
  }
}

export default connect(null, mapDispatchToProps)(LoadMoreButton)
