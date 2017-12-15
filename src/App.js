import React, { Component } from 'react';
import styled from 'styled-components'

import Header from './components/Header'
import Main from './containers/Main'
import Footer from './components/Footer'

import './App.css';

import backgroundImage from './eco-bg.jpg'

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;

  &:after {
    content: "";
    background: url(${backgroundImage});
    background-size: cover;
    opacity: 0.4;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
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
