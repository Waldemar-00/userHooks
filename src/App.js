import './App.css'
import IsOnline from './userhooks/isOnline'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User hooks of React</h1>
        <IsOnline/>
      </header>
    </div>
  );
}

export default App;
