import React from 'react'
import { connect } from 'react-redux'

import { removeTopic } from './../ducks/ecosystems'

import EcosystemTitle from './../components/EcosystemTitle'


class EcosystemTitleContainer extends React.Component {
  render() {
    return (
      <EcosystemTitle onRemoveTopic={this.props.removeTopic} />
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    removeTopic: (topic) => dispatch(removeTopic(topic))
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer)
