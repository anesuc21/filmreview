import './App.css';
import {AllRoutes} from "./routes/AllRoutes";
import { Header, Footer } from './componenets';
function App() {
  return (
    <div className="App min-h-screen dark:bg-gray-900  ">
      <Header/>
      <AllRoutes />
      <Footer/>
    </div>
  );
}

export default App;
