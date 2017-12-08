import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { green, brightGreen, lightGrey } from './../../../utils/colors'

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const buttonDimensions = 50

const Input = styled.input`
  border: 0;
  background: ${lightGrey};
  height: ${buttonDimensions}px;
  flex: 1;
  margin-right: 25px;
  color: grey;
  font-size: 1rem;
  padding-left: 5px;
`

const Button = styled.button`
  width: ${buttonDimensions}px;
  height: ${buttonDimensions}px;
  background: ${brightGreen};
  border: 0;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
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

  search = () => {
    this.props.onSearch(this.state.topic)
  }

  render() {
    return (
      <SearchWrapper>
        <Input value={this.state.topic} onChange={this.setTopic} />
        <Button onClick={this.search}>
          <span> + </span>
        </Button>
      </SearchWrapper>
    )
  }
}

export default Search
