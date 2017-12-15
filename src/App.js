import React, { Component } from 'react';
import styled from 'styled-components'

import Header from './components/Header'
import Main from './containers/Main'
import Footer from './components/Footer'

import './App.css';

import backgroundImageUrl from './eco-bg.jpg'

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
    opacity: ${props => props.bgImgSrc !== '' ? .7 : 0};
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: all 1s ease;
  }
`


class App extends Component {

  state = {
    bgImgSrc: ''
  }

  componentDidMount() {
    const backgroundImage = new Image()
    backgroundImage.onload = () => {
      this.setState({
        bgImgSrc: backgroundImage.src
      })
    }
    backgroundImage.src = backgroundImageUrl
  }

  render() {

    return (
      <AppWrapper bgImgSrc={this.state.bgImgSrc}>
        <Header />
        <Main />
        <Footer />
      </AppWrapper>
    )
  }
}

export default App;
