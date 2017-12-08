import React from 'react'
import { connect } from 'react-redux'

import { addTopic } from './../ducks/ecosystems'

import Search from './../components/Header/Search'


class SearchContainer extends React.Component {
  render() {
    return <Search onAdd={this.props.addTopic} />
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTopic: (topic) => dispatch(addTopic(topic))
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer)
