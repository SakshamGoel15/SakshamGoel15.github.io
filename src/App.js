import "./App.css";
// import ModalIndex from "./components/ModalIndex"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Portfoliocontainer from "./my_website/Portfoliocontainer";
function App() {
  return (
    <div className="App">
        <ToastContainer/>
      <Portfoliocontainer/>
    </div>
  );
}

export default App;