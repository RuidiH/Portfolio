import './App.css';
import Navigation from './components/Header/Navigation';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <header className='header'>
        <Navigation />
      </header>
      <Home />
    </div>
  );
}

export default App;
