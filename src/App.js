import './App.css';
import Presentation from './components/presentation/presentation.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/home/home.jsx';
import { ContextUI } from './components/context/context';
import Navbar from './components/navbar/navbar';
import { useContext } from 'react';
import GiftList from './components/giftList/giftList';
import Footer from './components/footer/footer.jsx';

function App() {
  const {handleClick} = useContext(ContextUI);
  const locationPath = useLocation();

  return (
    <div>
      <Navbar action={handleClick} style={locationPath.pathname === '/' ? 'display-none' : ''} />
        <Routes>
          <Route path='/' element={<Presentation />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/GiftList' element={<GiftList />} />
        </Routes>
      {/* <Footer style={locationPath.pathname === '/' ? 'display-none' : ''} /> */}
    </div>
  );
};

export default App;
