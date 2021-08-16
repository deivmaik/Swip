import { GlobalStyle } from '../src/global.styles'
import Header from '../src/components/Header';
import Hero from './pages/Hero'
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      {/* <Header/> */}
      <Router>
        <Navbar/>
        <Switch>
          <Hero path='/' exact component={Hero}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
