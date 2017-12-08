import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {minWidth, maxWidth} from './../../utils/constants'
import { brightGreen } from './../../utils/colors'

import Search from './Search'

const HeaderOuter = styled.div`
  display: flex;
  justify-content: center;
`

const HeaderInner = styled.div`
  min-width: ${minWidth}px;
  max-width: ${maxWidth}px;
  width: 100%;
`

const Title = styled.h1`
  color: ${brightGreen};
  display: flex;
  justify-content: space-between;
`

class Header extends React.Component {
  render() {
    return (
      <HeaderOuter>
        <HeaderInner>
          <Title><span>ecosystem</span> <span>explorer</span></Title>
          <Search />
        </HeaderInner>
      </HeaderOuter>
    )
  }
}

export default Header
