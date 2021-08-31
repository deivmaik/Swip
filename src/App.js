import React , { Component } from 'react'
import { GlobalStyle } from '../src/global.styles'

import Header from './containers/Header/Header';
import TopMessage from './components/TopMessage/TopMessage';
import Home from './pages/Home/Home'

import { BrowserRouter as Router } from 'react-router-dom';

import { MessageText} from './data/Data'

export default class App extends Component {
  render() {
      return (
        <>
        <GlobalStyle/>
        <TopMessage {...MessageText}/>
        <Header/>
          <Router>
            <Home/>
          </Router>
      </>
      )
  }

}