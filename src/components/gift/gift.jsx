import './gift.scss';
import ImageGift from '../../assets/images/img-gift-edit.jpg';
import IconGift from '../../assets/icons/iconGift.svg';
import Button from '../button/button.jsx';
import { Link} from 'react-router-dom';

const Gift = () => {
    return (
        <div className='gift-div'>
            <img className='photo' src={ImageGift} alt='image gift'/>
            <div>
                <img className='icon' src={IconGift} alt='icon gift'/>
                <h1>Regalos</h1>
                <p>El mejor regalo que nos podes hacer es compartir con nosotros esa noche. Pero si deseas hacernos algún otro presente te dejamos acá una lista...</p>
            </div>
            <Link to='/GiftList'><Button type='button-primary-xl' text='Lista de regalos' /></Link>
        </div>
    );
};

export default Gift;