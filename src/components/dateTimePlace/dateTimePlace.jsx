import './dateTimePlace.scss';
import IconCalendar from '../../assets/icons/iconCalendar.svg';
import IconPlace from '../../assets/icons/iconPlace.svg';
import ImagePlace from '../../assets/images/img-place-edit.jpg';

const dateTimePlace = () => {
    return (
        <div className='dateTimePlace-div'>
            <img className='photo' src={ImagePlace} alt='image place'/>
            <div>
                <img className='icon' src={IconCalendar} alt='icon calendar'/>
                <h1>Fecha y hora</h1>
                <p>18 de Febrero, 2024.</p>
                <p>De 20pm. a 4am.</p>
            </div>
            <div className='intern-div'>
                <img className='icon' src={IconPlace} alt='icon place' />
                <h1>Lugar</h1>
                <p>Dean Funes 3750.</p>
                <p>City Espacio de Eventos, Praga.</p>
            </div>
            <div className='iframe'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5727.266480719407!2d-64.22884851784323!3d-31.401642268196557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298b8150dab51%3A0x647f92936aa12de9!2sCity%20Espacio%20de%20Eventos!5e0!3m2!1ses-419!2sar!4v1683916659197!5m2!1ses-419!2sar" width='100%' height='100%' loading="lazy"></iframe>
            </div>
        </div>
    );
};

export default dateTimePlace;