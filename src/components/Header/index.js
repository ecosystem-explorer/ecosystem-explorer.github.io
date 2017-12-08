import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {minWidth, maxWidth} from './../../utils/constants'
import { brightGreen } from './../../utils/colors'

import SearchContainer from './../../containers/Search'
import ExamplesContainer from './../../containers/Examples'

const HeaderOuter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
`

const HeaderInner = styled.div`
  min-width: ${minWidth}px;
  max-width: ${maxWidth}px;
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;
`

const Title = styled.h1`
  color: ${brightGreen};
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

class Header extends React.Component {
  render() {
    return (
      <HeaderOuter>
        <HeaderInner>
          <Title>ecosystem-explorer</Title>
          <SearchContainer />
          <ExamplesContainer />
        </HeaderInner>
      </HeaderOuter>
    )
  }
}

export default Header
