import './App.css';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import Reviews from './components/Reviews/Reviews';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Product></Product>
      <Reviews></Reviews>
    </div>
  );
}

export default App;
