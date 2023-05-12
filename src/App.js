import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Countdown from './components/countdown/countdown.jsx';
import Home from './components/home/home.jsx';
import DateTimePlace from './components/dateTimePlace/dateTimePlace.jsx';
import DressCode from './components/dressCode/dressCode.jsx';
import Attendance from './components/attendance/attendance';
import Footer from './components/footer/footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Countdown />
      <Home />
      <DateTimePlace />
      <DressCode />
      <Attendance />
      <Footer />
    </div>
  );
};

export default App;
