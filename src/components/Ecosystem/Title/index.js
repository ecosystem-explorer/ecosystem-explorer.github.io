import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { green, darkGreen } from './../../../utils/colors'


const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${darkGreen};
  background-color: ${green};
  padding: 15px;
  font-weight: bold;
  align-items: center;
  height: 25px;
  max-width: 100%;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
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
    this.props.onRemoveTopic(this.props.topic)
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

export default Title
