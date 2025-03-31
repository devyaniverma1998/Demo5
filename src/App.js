
import "./index.css";  // Ensure Tailwind styles are loaded
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Product/>
     <Footer/>
    </div>
  );
}

export default App;
