import { GlobalStyle } from '../src/global.styles'
import Header from '../src/components/Header';
import Hero from './pages/Hero'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Hero/>
    </div>
  );
}

export default App;
