import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Star from './Star'

const StarsWrapper = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 100px;
  flex-shrink: 0;
  flex: 1;
`

const StarWrapper = styled.div`
  width: 20px;
  margin-left: 10px;
`


class Stars extends React.Component {

  renderNumber = () => {
    let number
    const { stars } = this.props

    if (stars > 999) {
      number = `${(stars / 1000).toFixed(1)} k`
    } else {
      number = stars
    }
    return number
  }

  render() {
    return (
      <StarsWrapper>
        {this.renderNumber()}
        <StarWrapper>
          <Star />
        </StarWrapper>
      </StarsWrapper>
    )
  }
}

Stars.propTypes = {
  stars: PropTypes.number.isRequired
}

export default Stars
