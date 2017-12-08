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
  renderRepoList = () => {
    if (!this.props.isLoading && this.props.data.items.length) {
      return <RepositoryList repositories={this.props.data.items} />
    } else if (!this.props.isLoading && !this.props.data.items.length) {
      return <p>No repos for this topic!</p>
    }
    return null
  }
  render() {
    return (
      <EcosystemWrapper>
        <Title
          reposCount={this.props.data.total_count}
          topic={this.props.topic}
          isLoading={this.props.isLoading || false}
        />
        {this.renderRepoList()}
      </EcosystemWrapper>
    )
  }
}

Ecosystem.propTypes = {
  topic: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default Ecosystem
