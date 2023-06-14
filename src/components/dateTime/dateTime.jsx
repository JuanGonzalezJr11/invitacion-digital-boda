import './dateTime.scss';
import IconCalendar from '../../assets/icons/iconCalendar.svg';
import ImagePlace from '../../assets/images/img-place-edit.jpg';

const dateTime = () => {
    return (
        <div className='dateTimePlace-div'>
            <img className='photo' src={ImagePlace} alt='image place'/>
            <div>
                <img className='icon' src={IconCalendar} alt='icon calendar'/>
                <h1>Fecha y hora</h1>
                <p>17 de Febrero, 2024.</p>
                <p>De 21:30pm. a 5am.</p>
            </div>
        </div>
    );
};

export default dateTime;