import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const NameWrapper = styled.div`
  overflow: hidden;
`

const TheName = styled.h3`
  margin-top: 0px;
  margin-bottom: 0.5rem;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const TheFullName = styled.div`
  font-size: 0.8rem;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`


class Name extends React.Component {
  render() {
    return (
      <NameWrapper>
        <TheName>{this.props.name}</TheName>
        <TheFullName>{this.props.fullName}</TheFullName>
      </NameWrapper>
    )
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
}

export default Name
