import React, { Component } from 'react';
import styled from 'styled-components'

import Header from './components/Header'
import Main from './containers/Main'

import './App.css';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`


class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Main />
      </AppWrapper>
    )
  }
}

export default App;
