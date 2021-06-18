import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Appbar from './Components/navbar/topnavbar';
import Products from './Components/Products/Products';
function App() {
  return (
    <Router>
      <div className="App">
        <Appbar/>
        <Products/>
      </div>
    </Router>
  );
};

export default App;