import './start.scss';
import IconRing from '../../assets/icons/iconRing.svg';
import ImageHome from '../../assets/images/img-home-edit.jpg';

const start = () => {
    return (
        <div className='home-div'>
            <div>
                <img className='icon' src={IconRing} alt='icon ring'/>
                <h1>¡Nuestra boda!</h1>
            </div>
            <img className='photo' src={ImageHome} alt='image home'/>
            <p>Queremos que seas parte de este momento tan especial para nosotros...</p>
        </div>
    );
};

export default start;