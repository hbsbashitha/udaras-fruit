import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Appbar from './Components/navbar/topnavbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Appbar/>
      </div>
    </Router>
  );
}

export default App;