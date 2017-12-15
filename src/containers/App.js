import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { addTopic } from './../ducks/ecosystems'
import { getTopicsFromSearch } from './../utils/helpers'

import App from './../components/App'


class AppContainer extends React.Component {

  componentDidMount() {
    const { location } = this.props
    this.setEcosystems(location.search)
  }

  componentWillReceiveProps(newProps) {
    const { location, history } = this.props
    if (newProps.ecosystems.length !== this.props.ecosystems.length) {
      const newTopics = newProps.ecosystems.map((e) => e.topic)
      if (newTopics.length) {
        const newLocation = `/?topics=${newTopics.join(',')}`
        history.push(newLocation)
      } else {
        history.push('/')
      }

    }
  }

  setEcosystems = (searchString) => {
    const topics = getTopicsFromSearch(searchString)
    topics.forEach((topic) => this.props.addTopic(topic))
  }

  render() {
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
