import React , { Component } from 'react'
import { GlobalStyle } from '../src/global.styles'
import Header from '../src/components/Header';
import Hero from './pages/Hero'
import Footer from './pages/Footer'
import TopMessage from './components/TopMessage';
import HIW from './pages/HIW';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MessageText} from './data/Data'

export default class App extends Component {
  render() {
      return (
        <div className="App">
        <GlobalStyle/>
        <Router>
          <TopMessage {...MessageText}/>
          <Header/>
          <Hero />
          <HIW/>
          <div style={{background: '#fff', height: '100vh'}}>section </div>
          <Footer/>
        </Router>
      </div>
      )
  }

}