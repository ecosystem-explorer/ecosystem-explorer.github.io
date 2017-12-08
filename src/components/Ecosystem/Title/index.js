import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { connect } from 'react-redux'

import { removeTopic } from './../../../ducks/ecosystems'

import { green, brightGreen } from './../../../utils/colors'


const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${brightGreen};
  background-color: grey;
  padding: 15px;
  font-weight: bold;
  align-items: center;
  height: 25px;
  max-width: 100%;
`

const Counter = styled.div`
  display: flex;
`

const Remove = styled.div`
  margin-left: 15px;
  cursor: pointer;
`


class Title extends React.Component {

  removeTopic = () => {
    this.props.removeTopic(this.props.topic)
  }

  renderLoader = () => {
    if (this.props.isLoading) {
      return <div>loading...</div>
    }
    return null
  }

  renderRepoCount = () => {
    if (!this.props.isLoading && this.props.reposCount >= 0) {
      return (
        <Counter>
          <div>{this.props.reposCount} repos</div>
          <Remove onClick={this.removeTopic}>X</Remove>
        </Counter>
      )
    } 
    return null
  }

  render() {
    return (
      <TitleWrapper>
        <div>{this.props.topic}</div>
        {this.renderRepoCount()}
        {this.renderLoader()}
      </TitleWrapper>
    )
  }
}

Title.propTypes = {
  topic: PropTypes.string.isRequired,
  reposCount: PropTypes.number,
  isLoading: PropTypes.bool.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTopic: (topic) => dispatch(removeTopic(topic))
  }
}

export default connect(null, mapDispatchToProps)(Title)
