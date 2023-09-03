import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/header/header.component';

// Pages
import HomePage from './pages/home-page.component';

function App() {
  return (
    <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Routes>
              <Route path='/' element={<HomePage />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
