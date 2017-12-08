import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { green, brightGreen } from './../../../utils/colors'


const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${brightGreen};
  background-color: grey;
  padding: 15px;
  font-weight: bold;
  flex: 0;
  align-items: center;
  height: 40px;
  max-width: 100%;
`


class Title extends React.Component {

  renderLoader = () => {
    if (this.props.isLoading) {
      return <div>loading...</div>
    }
    return null
  }

  renderRepoCount = () => {
    if (!this.props.isLoading && this.props.reposCount >= 0) {
      return <div>{this.props.reposCount} repos</div>
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
