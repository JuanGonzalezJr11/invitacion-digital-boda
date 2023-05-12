import '../attendance/attendance.scss';
import IconAttendance from '../../assets/icons/iconAttendance.svg';
import ImageAttendance from '../../assets/images/img-attendance-edit.jpg';

const attendance = () => {
    return (
        <div className='attendance-div'>
            <img className='photo' src={ImageAttendance} alt='image attendance' />
            <div>
                <img className='icon' src={IconAttendance} alt='icon attendance'/>
                <h1>Asistencia</h1>
                <p>Esperamos que formes parte de este lindo recuerdo.</p>
            </div>
        </div>
    );
};

export default attendance;