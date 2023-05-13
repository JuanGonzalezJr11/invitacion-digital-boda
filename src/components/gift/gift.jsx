import './gift.scss';
import ImageGift from '../../assets/images/img-gift-edit.jpg';
import IconGift from '../../assets/icons/iconGift.svg';
import Button from '../button/button.jsx';

const gift = () => {
    return (
        <div className='gift-div'>
            <img className='photo' src={ImageGift} alt='image gift'/>
            <div>
                <img className='icon' src={IconGift} alt='icon gift'/>
                <h1>Regalos</h1>
                <p>El mejor regalo que nos podes hacer es compartir con nosotros esa noche. Pero si deseas hacernos algún otro presente te dejamos acá una lista...</p>
            </div>
            <Button type='button-primary-xl' text='Lista de regalos' />
        </div>
    );
};

export default gift;