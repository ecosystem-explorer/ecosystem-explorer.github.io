import React from 'react'
import { connect } from 'react-redux'

import LoadMoreButton from './../components/LoadMoreButton'

import { loadMore } from './../ducks/ecosystems'


class LoadMoreButtonContainer extends React.Component {
  render() {
    return <LoadMoreButton onLoadMore={this.props.loadMore} isLoadingMore={this.props.isLoadingMore}/>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMore: (topic) => dispatch(loadMore(topic))
  }
}

export default connect(null, mapDispatchToProps)(LoadMoreButtonContainer)
