import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import RepositoryList from './../RepositoryList'
import Title from './Title'

const EcosystemWrapper = styled.div`
  flex: 1; 
  max-height: 100%;
  display: flex;
  flex-direction: column;
`


class Ecosystem extends React.Component {
  render() {
    return (
      <EcosystemWrapper>
        <Title
          reposCount={this.props.data.total_count}
          topic={this.props.topic}
        />
        <RepositoryList repositories={this.props.data.items} />
      </EcosystemWrapper>
    )
  }
}

Ecosystem.propTypes = {
  topic: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default Ecosystem
