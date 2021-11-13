import {React} from 'react';
import {NavBar} from './components/NavBar/NavBar.js'
import {BrowserRouter} from 'react-router-dom';
import {Routes} from './components/Routes.js';
import {CartProvider} from './components/CartContext.js';
import {Footer} from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter> 
          <CartProvider>
          <NavBar />
          <Routes />
          </CartProvider>
        </BrowserRouter>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
