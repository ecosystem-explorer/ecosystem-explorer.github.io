import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { addTopic } from './../ducks/ecosystems'

import App from './../components/App'


class AppContainer extends React.Component {

  componentDidMount() {
    const { location } = this.props
    this.setEcosystems(location.search)
  }

  setEcosystems = (searchString) => {
    const split = searchString.split('=')
    if (split.length === 2) {
      const topics = split[1].split(',')
      topics.forEach((topic) => this.props.addTopic(topic))
    }
  }

  render() {
    // const { match, location, history } = this.props
    // console.log(location)
    // console.log(this.props.ecosystems)
    return (
      <App />
    )
  }
}

const mapStateToProps = (state) => {
  return {ecosystems: state.ecosystems.ecosystems}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTopic: (topic) => dispatch(addTopic(topic))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(withRouter(AppContainer))
