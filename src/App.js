import './App.css';
import './utilities/css/util.css';
import NavBar from './components/NavBar/navbar';
import Sidebar from './components/Sidebar/sidebar';
import Footer from './components/Footer/footer';
import NavBarRoutes from './routes/navbarRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <Sidebar />
        <Footer />
        <main>
          <div className="main__container">
            <NavBarRoutes />
            <ToastContainer
              className="toastify"
              position="bottom-right"
              autoClose={2500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
