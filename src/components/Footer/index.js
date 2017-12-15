import React from 'react'
import styled from 'styled-components'

import { darkGreen } from './../../utils/colors'

const Anchor = styled.a`
  color: ${darkGreen};
`

const FooterWrapper = styled.div`
  color: ${darkGreen};
  display: flex;
  justify-content: flex-end;
  padding: .5rem 1rem;
  font-size: 0.6rem;
`


class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        brought to you by&nbsp;
        <Anchor href="https://www.superservice-international.com" target="_blank">superservice-international</Anchor>
        &nbsp;|&nbsp;
        <Anchor href="https://github.com/ecosystem-explorer/ecosystem-explorer.github.io" target="_blank">github</Anchor>
      </FooterWrapper>
    )
  }
}

export default Footer
