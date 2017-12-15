import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {minWidth, maxWidth} from './../../utils/constants'

import ShadowWrapper from '../../components/ShadowWrapper'
import RepositoryList from './../RepositoryList'
import Title from './../../containers/EcosystemTitle'
import LoadMoreButton from '../../components/LoadMoreButton'

const EcosystemWrapper = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  min-width: ${minWidth}px;
  max-width: ${maxWidth}px;
  width: 100%;
  margin: 0 auto;

  padding: 0 10px;
`

const EcosystemInner = ShadowWrapper.extend`
  background-color: white;
  flex: 1; 
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ListWrapper = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
`


class Ecosystem extends React.Component {
  renderRepoList = () => {
    if (!this.props.isLoading && this.props.data.items.length) {
      return (
      <ListWrapper>
        <RepositoryList repositories={this.props.data.items} />
        <LoadMoreButton isLoadingMore={this.props.isLoadingMore} topic={this.props.topic}/>
      </ListWrapper>
      )
    } else if (!this.props.isLoading && !this.props.data.items.length) {
      return <p>No repos for this topic!</p>
    }
    return null
  }
  render() {
    return (
      <EcosystemWrapper>
        <EcosystemInner>
          <Title
            reposCount={this.props.data.total_count}
            topic={this.props.topic}
            isLoading={this.props.isLoading || false}
          />
          {this.renderRepoList()}
        </EcosystemInner>
      </EcosystemWrapper>
    )
  }
}

Ecosystem.propTypes = {
  topic: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isLoadingMore: PropTypes.bool.isRequired
}

export default Ecosystem
