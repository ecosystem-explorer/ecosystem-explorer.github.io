import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {minWidth, maxWidth} from './../../utils/constants'
import { brightGreen } from './../../utils/colors'

import SearchContainer from './../../containers/Search'

const HeaderOuter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  font-size: 0.9rem;
`

const HeaderInner = styled.div`
  min-width: ${minWidth}px;
  max-width: ${maxWidth}px;
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;
`

class Header extends React.Component {
  render() {
    return (
      <HeaderOuter>
        <HeaderInner>
          <SearchContainer />
        </HeaderInner>
      </HeaderOuter>
    )
  }
}

export default Header
