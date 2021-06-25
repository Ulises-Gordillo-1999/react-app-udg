import "./App.css";
import FetchPokeApi from "./components/FetchPokeApi";
import AppRouter from "./routers/AppRouter";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <AppRouter />
      <FetchPokeApi/>
    </div>
  );
}

export default App;
