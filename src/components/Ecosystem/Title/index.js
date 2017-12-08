import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { green, brightGreen } from './../../../utils/colors'


const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${brightGreen};
  background-color: ${green};
  padding: 15px;
  font-weight: bold;
  flex: 0;
`


class Title extends React.Component {
  render() {
    return (
      <TitleWrapper>
        <div>{this.props.topic}</div>
        <div>{this.props.reposCount} repos</div>
      </TitleWrapper>
    )
  }
}

Title.propTypes = {
  topic: PropTypes.string.isRequired,
  reposCount: PropTypes.number.isRequired
}

export default Title
