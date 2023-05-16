import { useEffect, useState } from 'react';
import './countdown.scss';

const Countdown = ({targetDate}) => {
    const calculateTimeLeft = () => {
        const difference = targetDate.getTime() - new Date().getTime();
        let timeLeft = {};
        if(difference > 0) {
            timeLeft = {
                days: Math.floor(difference/(1000*60*60*24)),
                hours: Math.floor((difference/(1000*60*60))%24),
                minutes: Math.floor((difference/1000/60)%60),
                seconds: Math.floor((difference/1000)%60),
            };
        };
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div className='div-container'>
            <div>
                <h2>{timeLeft.days}</h2>
                <p>días</p>
            </div>
            <div>
                <h2>{timeLeft.hours}</h2>
                <p>horas</p>
            </div>
            <div>
                <h2>{timeLeft.minutes}</h2>
                <p>minutos</p>
            </div>
            <div>
                <h2>{timeLeft.seconds}</h2>
                <p>segundos</p>
            </div>
        </div>
    );
};

export default Countdown;