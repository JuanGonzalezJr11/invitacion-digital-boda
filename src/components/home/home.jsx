import './home.scss';
// import IconRing from '../../assets/icons';
import ImagePhoto from '../../assets/images/img_home.jpg';

const home = () => {
    return (
        <div>
            <div>
                <h1>¡Nuestra boda!</h1>
            </div>
            <div>
                <img className='img-photo' src={ImagePhoto} alt='Imagen home'/>
            </div>
            <div>
                <p>
                    Queremos que seas parte de este momento tan especial para nosotros...
                </p>
            </div>
        </div>
    );
};

export default home;