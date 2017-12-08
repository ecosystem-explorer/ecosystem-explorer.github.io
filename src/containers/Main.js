import React from 'react'
import { connect } from 'react-redux'

import Main from './../components/Main'


class MainContainer extends React.Component {
  render() {
    return (
      <Main ecosystems={this.props.ecosystems}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {ecosystems: state.ecosystems.ecosystems}
}

export default connect(mapStateToProps, () => {return {}})(MainContainer)
