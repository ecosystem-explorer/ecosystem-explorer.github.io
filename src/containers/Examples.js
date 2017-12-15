import React from 'react'
import { connect } from 'react-redux'

import { addTopic } from './../ducks/ecosystems'

import Examples from './../components/Intro/Examples'


class ExampleContainer extends React.Component {
  render() {
    return (
      <Examples
        onAdd={this.props.addTopic}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTopic: (topic) => dispatch(addTopic(topic))
  }
}

export default connect(null, mapDispatchToProps)(ExampleContainer)
