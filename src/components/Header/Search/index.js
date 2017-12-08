import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { green, brightGreen, lightGrey } from './../../../utils/colors'

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

const buttonDimensions = 50

const Input = styled.input`
  border: 0;
  background: ${lightGrey};
  height: ${buttonDimensions}px;
  flex: 1;
  margin-right: 15px;
  color: grey;
  font-size: 1rem;
  padding-left: 5px;
  outline: none;
`

const Button = styled.button`
  width: ${buttonDimensions}px;
  height: ${buttonDimensions}px;
  background: ${brightGreen};
  border: 0;
  border-radius: 0px;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  outline: none;
  &:hover {background: ${green};};
  &:active {background: green;}
`

class Search extends React.Component {

  state = {
    topic: ''
  }

  setTopic = (event) => {
    this.setState({topic: event.target.value})
  }

  addTopic = () => {
    if (this.state.topic.length) {
      this.props.onAdd(this.state.topic)
      this.setState({topic: ''})
    }
  }

  render() {
    return (
      <SearchWrapper>
        <Input value={this.state.topic} onChange={this.setTopic} />
        <Button onClick={this.addTopic}>
          <span> + </span>
        </Button>
      </SearchWrapper>
    )
  }
}

Search.propTypes = {
  onAdd: PropTypes.func.isRequired
}

export default Search
