import React from 'react'
import { connect } from 'react-redux'

import App from './../components/App'


class AppContainer extends React.Component {
  render() {
    return (
      <App />
    )
  }
}

const mapStateToProps = (state) => {
  return {ecosystems: state.ecosystems.ecosystems}
}

export default connect(mapStateToProps, () => {return {}})(AppContainer)
