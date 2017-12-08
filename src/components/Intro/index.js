import React from 'react'
import styled from 'styled-components'

import {minWidth, maxWidth} from './../../utils/constants'

const IntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const IntroInner = styled.div`
  min-width: ${minWidth}px;
  max-width: ${maxWidth}px;
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;
`

class Intro extends React.Component {
  render() {
    return (
      <IntroWrapper>
        <IntroInner>
          <p>Explore the ecosystems of open-source software hosted on github by topics.</p>
          <p>Compare popular projects accross technologies.</p>
        </IntroInner>
      </IntroWrapper>
    )
  }
}

export default Intro
