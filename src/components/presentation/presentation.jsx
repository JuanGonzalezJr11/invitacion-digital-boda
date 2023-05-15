import './presentation.scss';
import '../../assets/images/img-presentation-edit.jpg';
import IconPresentation from '../../assets/icons/iconPresentation.svg';
import { Link } from 'react-router-dom';

const presentation = () => {
    return (
        <div className='div-presentation'>
            <div className='gradient-top'>
                <h1>Iara & Juan</h1>
            </div>
            <div className='gradient-bottom'>
                <Link to='/home'><img src={IconPresentation} alt='down'/></Link>
            </div>
        </div>
    );
};

export default presentation;