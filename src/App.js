import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ProductCard from './components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting="Hola react"></ItemListContainer>
      <ProductCard></ProductCard>
    </div>
  );
}

export default App;
