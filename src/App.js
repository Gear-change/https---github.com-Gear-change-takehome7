import logo from './logo.svg';
import './App.css';
import SignUp2 from './components/SignUp2.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SignUp2 />
      </header>
    </div>
  );
}

export default App;
