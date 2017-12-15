import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ShadowWrapper from './../../../components/ShadowWrapper'
import { green, brightGreen, darkGreen } from './../../../utils/colors'

const SearchWrapper = ShadowWrapper.extend`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  background: white;
`

const buttonDimensions = 50

const Input = styled.input`
  border: 0;
  background: white;
  height: ${buttonDimensions}px;
  flex: 1;
  margin-right: 15px;
  color: ${darkGreen};
  font-size: 1rem;
  padding-left: 10px;
  outline: none;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  padding-top: 0px;
  padding-bottom: 0px;
`

const Button = styled.button`
  width: ${buttonDimensions}px;
  height: ${buttonDimensions}px;
  background: ${green};
  border: 0;
  border-radius: 0px;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  outline: none;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  &:hover {background: ${brightGreen};};
  &:active {background: ${darkGreen};}
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

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.addTopic()
    }
  }

  render() {
    return (
      <SearchWrapper>
        <Input
          value={this.state.topic}
          onChange={this.setTopic}
          onKeyPress={this.handleKeyPress}
          placeholder="ecosystem to add..."
        />
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
