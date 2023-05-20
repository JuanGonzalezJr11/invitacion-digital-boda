import './App.css';
import Presentation from './components/presentation/presentation.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home.jsx';
import { ContextUI } from './components/context/context';
import Navbar from './components/navbar/navbar';
import { useContext } from 'react';
import GiftList from './components/giftList/giftList';
import Footer from './components/footer/footer.jsx';

function App() {
  const {handleClick} = useContext(ContextUI);

  return (
    <div>
        <Navbar action={handleClick} />
          <Routes>
            <Route path='/' element={<Presentation />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/GiftList' element={<GiftList />} />
          </Routes>
        <Footer />
    </div>
  );
};

export default App;
