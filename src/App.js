import './App.css'
import useOnline from './userhooks/onlineHook'
import Button from './ButtonSave'
const StatusConnect = () => {
const isOnline = useOnline()
  return (
  <h2> 
    { isOnline ? 'You are ONLINE' : 'DISCONNECTED!!!'}
  </h2>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User hooks of React</h1>
        <StatusConnect />
        <Button/>
      </header>
    </div>
  );
}

export default App;
