import logo from './logo.svg';
import './App.css';
import Decrement from './Components/decrement';
import Increment from './Components/Increment';
function App() {
  var name=['harshad','sagar']

  return (
    <div className='App'>
      <Decrement firstName={name}/>
    </div>
  );
}

export default App;
