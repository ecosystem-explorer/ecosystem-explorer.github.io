import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { loadMore } from './../../ducks/ecosystems'

import { green, brightGreen, darkGreen } from './../../utils/colors'

const Button = styled.button`
  width: 200px;
  height: 50px;
  margin: 0.5rem auto;
  background: ${green};
  border: 0;
  border-radius: 0px;
  cursor: pointer;
  color: white;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  outline: none;
  &:hover {background: ${brightGreen};};
  &:active {background: ${darkGreen};}
`


class LoadMoreButton extends React.Component {
  
  loadMore = () => {
    this.props.loadMore(this.props.topic)
  }
  
  render() {
    return <Button disabled={this.props.isLoadingMore} onClick={this.loadMore}>load more...</Button>
  }
}

LoadMoreButton.propTypes = {
  isLoadingMore: PropTypes.bool.isRequired,
  topic: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMore: (topic) => dispatch(loadMore(topic))
  }
}

export default connect(null, mapDispatchToProps)(LoadMoreButton)
