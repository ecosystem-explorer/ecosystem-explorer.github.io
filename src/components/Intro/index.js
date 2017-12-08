import React from 'react'
import styled from 'styled-components'

import {minWidth, maxWidth} from './../../utils/constants'

const IntroWrapper = styled.div`
  max-width: ${maxWidth}px;
  width: 100%;
  margin: 0 auto;
`

class Intro extends React.Component {
  render() {
    return (
      <IntroWrapper>
        <p>Explore the ecosystems of open-source software hosted on github by topics.</p>
        <p>Compare popular projects accross technologies.</p>
      </IntroWrapper>
    )
  }
}

export default Intro
