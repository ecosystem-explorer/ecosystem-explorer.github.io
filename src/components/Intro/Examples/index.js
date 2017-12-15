import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { green, darkGreen } from './../../../utils/colors'

const ExamplesWrapper = styled.div`
  display: flex;
`

const Example = styled.div`
  color: ${green};
  cursor: pointer;
  margin-right: 3px;
`

const Prefix = styled.div`
  color: ${darkGreen};
`

const examples = ['react', 'angular', 'vue']


class Examples extends React.Component {

  renderExamples = () => {
    return examples.map((example, index) => {
      let body
      if (index < examples.length - 1) {
        body = `${example},`
      } else {
        body = `${example}`
      }
      return <Example key={index} onClick={this.addTopic(example)}>{body}</Example>
    }
    )
  }

  addTopic = (example) => () => {
    this.props.onAdd(example)
  }

  render() {
    return (
      <ExamplesWrapper>
        <Prefix>examples:&nbsp;</Prefix>
        {this.renderExamples()}
      </ExamplesWrapper>
    )
  }
}

Examples.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default Examples
