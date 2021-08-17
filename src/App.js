import { GlobalStyle } from '../src/global.styles'
import Header from '../src/components/Header';
import Hero from './pages/Hero'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Router>
        <Header/>
        <Switch>
          <Hero />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
