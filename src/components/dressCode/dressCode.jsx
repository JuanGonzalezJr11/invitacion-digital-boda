import './dressCode.scss';
import ImageDress from '../../assets/images/img-dress-edit.jpg';
import IconDress from '../../assets/icons/iconDress.svg';
import IconBoy from '../../assets/icons/iconBoy.svg';
import IconGirl from '../../assets/icons/iconGirl.svg';

const dressCode = () => {
    return (
        <div className='dressCode-div'>
            <img className='photo' src={ImageDress} alt='image dress'/>
            <div>
                <img className='icon' src={IconDress} alt='icon dress'/>
                <h1>Dress code</h1>
                <div className='dressBoyGirl-div'>
                    <img src={IconBoy} alt='icon boy'/>
                    <p>Vestimenta formal. No utilizar color azul noche en ninguna de sus prendas.</p>
                </div>
                <div className='dressBoyGirl-div'>
                    <img src={IconGirl} alt='icon girl'/>
                    <p>Vestimenta formal. No utilizar color blanco en prendas de torso.</p>
                </div>
            </div>
        </div>
    );
};

export default dressCode;