
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Cart from './Pages/cart/Cart';
import Home from './Pages/Home';

function App() {
  return (

    <div className="App">
      <Navbar/>
     <Cart/>
      <Footer/>

    </div>
  );
}

export default App;
