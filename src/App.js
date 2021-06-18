//import logo from './logo.svg';
import './App.css';
//import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import FetchPokeApi from './components/FetchPokeApi';
import ModalDetails from  './components/ModalDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/*<NavBar/>*/}
      <ItemListContainer greeting="Hola react"/> 
      <FetchPokeApi/>
    </div>
  );
}

export default App;
