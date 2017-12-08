import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


import Ecosystem from './../Ecosystem'


const MainWrapper = styled.div`
  flex: 1;
  overflow-x: scroll;
  display: flex;
`


class Main extends React.Component {

  renderEcosystems = () => {
    return this.props.ecosystems.map((ecosystem, index) => {
      return (
        <Ecosystem
          key={index}
          topic={ecosystem.topic}
          data={ecosystem.data}
          isLoading={ecosystem.isLoading}
        />
      )
    })
  }
  render() {
    return (
      <MainWrapper>
        {this.renderEcosystems()}
      </MainWrapper>
    )
  }
}

Main.propTypes = {
  ecosystems: PropTypes.array.isRequired
}

export default Main
