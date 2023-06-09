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
import { useContext } from 'react';
import { ContextUI } from '../context/context';
import PageTransition from '../pageTransition/pageTransition.jsx';
import Footer from '../footer/footer';

const Home = () => {
    const {myRef} = useContext(ContextUI);
    const targetDate = new Date('2024-02-17T21:30:00');

    return (
        <PageTransition>
            <div className='div-home'>
                <div ref={(el) => (myRef.current[0] = el)} className='div-countdown'>
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
            <Footer />
        </PageTransition>
    );
};

export default Home;