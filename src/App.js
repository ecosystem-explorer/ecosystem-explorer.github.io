import React, { Component } from 'react';
import styled from 'styled-components'

import Header from './components/Header'
import Main from './containers/Main'
import Footer from './components/Footer'

import './App.css';

import backgroundImageUrl from './eco-bg.jpg'
import backgroundImageBlurUrl from './eco-bg-blur.jpg'

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;

  &:after {
    content: "";
    background: url(${backgroundImageUrl});
    background-size: cover;
    opacity: ${props => props.showBg ? .7 : 0};
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: all 1s ease;
    overflow: hidden;
    transform: scale(1.1);
  }
  &:before {
    content: "";
    background: url(${backgroundImageBlurUrl});
    z-index: -2;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: ${props => props.showBg ? 0 : 0.7};
    height: 100vh;
    width: 100vw;
    filter: blur(15px);
    overflow: hidden;
    transform: scale(1.1);
    transition: all 1s ease;
  }
`


class App extends Component {

  state = {
    showBg: false
  }

  componentDidMount() {
    const backgroundImage = new Image()
    backgroundImage.onload = () => {
      setTimeout(() => {
        this.setState({
          showBg: true
        })
      }, 2000)
    }
    backgroundImage.src = backgroundImageUrl
  }

  render() {

    return (
      <AppWrapper showBg={this.state.showBg}>
        <Header />
        <Main />
        <Footer />
      </AppWrapper>
    )
  }
}

export default App;
