import '../attendance/attendance.scss';
import IconAttendance from '../../assets/icons/iconAttendance.svg';
import ImageAttendance from '../../assets/images/img-attendance-edit.jpg';
import Button from '../button/button.jsx';

const attendance = () => {
    const goToForm = () => {
        window.open('https://forms.gle/2KHhgC4Wcpwxbxug6');
    }

    return (
        <div className='attendance-div'>
            <img className='photo' src={ImageAttendance} alt='image attendance' />
            <div>
                <img className='icon' src={IconAttendance} alt='icon attendance'/>
                <h1>Asistencia</h1>
                <p>Esperamos que formes parte de este lindo recuerdo.</p>
            </div>
            <Button type='button-primary-xl' text='Confirmar asistencia' onClick={goToForm}/>
        </div>
    );
};

export default attendance;