import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Countdown from './components/countdown/countdown.jsx';
import Home from './components/home/home.jsx';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Countdown />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
