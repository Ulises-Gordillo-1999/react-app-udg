import "./App.css";
//import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import FetchPokeApi from "./components/FetchPokeApi";
import AppRouter from "./routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <AppRouter />
      {/*<NavBar/>*/}
      {/*<ItemListContainer/>  */}
      {/*<FetchPokeApi/> */}
    </div>
  );
}

export default App;
