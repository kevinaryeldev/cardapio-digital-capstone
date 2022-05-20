import { ToastContainer } from "react-toastify";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
