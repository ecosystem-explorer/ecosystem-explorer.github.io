import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Repository from './../Repository'

const ListWrapper = styled.div`
  flex: 1;
  overflow-y: scroll;
`


class RepositoryList extends React.Component {
  renderRepositories = () => {
    return this.props.repositories.map((repository, index) => {
      const {
        html_url,
        name,
        full_name,
        stargazers_count
      } = repository

      return (
        <Repository
          name={name}
          fullName={full_name}
          url={html_url}
          stars={stargazers_count}
          key={index}
        />
      )
    })
  }

  render() {
    return (
      <ListWrapper>
        {this.renderRepositories()}
      </ListWrapper>
    )
  }
}

RepositoryList.propTypes = {
  repositories: PropTypes.array.isRequired
}

export default RepositoryList
