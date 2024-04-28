import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import List from './List'
import Zmena from './Zmena';
import LoginPage from './Loginpage';
import Userlist from "./Userlist";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/loginpage' element={<LoginPage />} />
        <Route path='/list' element={<List />} />
        <Route path='/zmena' element={<Zmena />} />
        <Route path='/userlist' element={<Userlist />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
