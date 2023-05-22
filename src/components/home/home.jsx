import './home.scss';
import Countdown from '../countdown/countdown.jsx'
import Start from '../start/start.jsx';
import DateTimePlace from '../dateTime/dateTime.jsx';
import Place from '../place/place.jsx';
import DressCode from '../dressCode/dressCode.jsx';
import Attendance from '../attendance/attendance.jsx';
import Gift from '../gift/gift.jsx';
import Playlist from '../playlist/playlist.jsx';
import End from '../end/end.jsx';
import {useContext, useRef} from 'react';
import { ContextUI } from '../context/context';

const Home = () => {
    const {myRef} = useContext(ContextUI);

    const targetDate = new Date('2024-02-18T21:00:00')

    return (
        <div className='div-home'>
            {/* <Navbar action={handleClick}/> */}
            <div ref={(el) => (myRef.current[0] = el)}>
                <Countdown targetDate={targetDate}/>
            </div>
            <div>
                <Start />
            </div>
            <div ref={(el) => (myRef.current[1] = el)}>
                <DateTimePlace />
            </div>
            <div ref={(el) => (myRef.current[2] = el)}>
                <Place />
            </div>
            <div ref={(el) => (myRef.current[3] = el)}>
                <DressCode />
            </div>
            <div ref={(el) => (myRef.current[4] = el)}>
                <Attendance />
            </div>
            <div ref={(el) => (myRef.current[5] = el)}>
                <Gift />
            </div>
            <div ref={(el) => (myRef.current[6] = el)}>
                <Playlist />
            </div>
            <div ref={(el) => (myRef.current[7] = el)}>
                <End />
            </div>
        </div>
    );
};

export default Home;