import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/header/Header';

// Pages
import Home from './pages/Home';
import AddContact from './pages/AddContact';

function App() {
  return (
    <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact/add' element={<AddContact />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
