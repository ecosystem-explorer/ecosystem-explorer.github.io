import React from 'react'
import styled from 'styled-components'

import {minWidth, maxWidth} from './../../utils/constants'
import { darkGreen } from './../../utils/colors'

import ShadowWrapper from './../../components/ShadowWrapper'
import ExamplesContainer from './../../containers/Examples'

const IntroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`

const IntroInner = ShadowWrapper.extend`
  min-width: calc(${minWidth}px - 30px);
  max-width: calc(${maxWidth}px - 30px);
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  background: white;
  color: ${darkGreen};
`

class Intro extends React.Component {
  render() {
    return (
      <IntroWrapper>
        <IntroInner>
          <h1>ecosystem explorer</h1>
          <p>explore the ecosystems of open-source software hosted on github across frameworks and technologies.</p>
          <ExamplesContainer />
        </IntroInner>
      </IntroWrapper>
    )
  }
}

export default Intro
