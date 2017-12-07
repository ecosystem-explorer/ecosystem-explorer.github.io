import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TheName = styled.h3`
  margin-top: 0px;
  color: white;
`

const TheFullName = styled.div`
  font-size: 0.8rem;
  color: white;
`


class Name extends React.Component {
  render() {
    return (
      <div>
        <TheName>{this.props.name}</TheName>
        <TheFullName>{this.props.fullName}</TheFullName>
      </div>
    )
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
}

export default Name
