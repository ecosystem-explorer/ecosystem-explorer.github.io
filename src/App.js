import React, { Component } from 'react';
import styled from 'styled-components'

import Header from './components/Header'
import Main from './containers/Main'
import Footer from './components/Footer'

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
        <Footer />
      </AppWrapper>
    )
  }
}

export default App;
