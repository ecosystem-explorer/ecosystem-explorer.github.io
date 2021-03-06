import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { darkGreen } from './../../utils/colors'

import Name from './Name'
import Stars from './Stars'

const RepositoryLink = styled.a`
  text-decoration: none;
`

const RepositoryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${darkGreen};
  color: ${darkGreen};
  padding: 15px;
  background-color: white;
`


class Repository extends React.Component {
  render() {
    const {
      url,
      name,
      fullName,
      stars
    } = this.props
    return (
      <RepositoryLink href={url} target="_blank">
        <RepositoryWrapper>
          <Name name={name} fullName={fullName}/>
          <Stars stars={stars} />
        </RepositoryWrapper>
      </RepositoryLink>
    )
  }
}

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired
}

export default Repository
