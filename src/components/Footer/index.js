import React from 'react'
import styled from 'styled-components'

import { brightGreen, lightGrey } from './../../utils/colors'

const Anchor = styled.a`
  color: ${brightGreen};
`

const FooterWrapper = styled.div`
  color: ${lightGrey};
  display: flex;
  justify-content: flex-end;
  padding: 1em;
`


class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        ecosystem explorer is brought to you by&nbsp;
        <Anchor href="https://www.superservice-international.com" target="_blank">superservice-international</Anchor>
        &nbsp;|&nbsp;
        <Anchor href="https://github.com/ecosystem-explorer/ecosystem-explorer.github.io" target="_blank">github</Anchor>
      </FooterWrapper>
    )
  }
}

export default Footer
