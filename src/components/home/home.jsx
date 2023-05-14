import './home.scss';
import Navbar from '../navbar/navbar.jsx';
import Countdown from '../countdown/countdown.jsx'
import Start from '../start/start.jsx';
import DateTimePlace from '../dateTimePlace/dateTimePlace.jsx';
import DressCode from '../dressCode/dressCode.jsx';
import Attendance from '../attendance/attendance.jsx';
import Gift from '../gift/gift.jsx';
import Playlist from '../playlist/playlist.jsx';
import End from '../end/end.jsx';
import Footer from '../footer/footer.jsx';

const home = () => {
    return (
        <div className='div-body'>
            <Navbar />
            <Countdown />
            <Start />
            <DateTimePlace />
            <DressCode />
            <Attendance />
            <Gift />
            <Playlist />
            <End />
            <Footer />
        </div>
    );
};

export default home;