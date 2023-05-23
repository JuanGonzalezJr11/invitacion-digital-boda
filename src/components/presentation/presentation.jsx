import './presentation.scss';
import '../../assets/images/img-presentation-edit.jpg';
import IconPresentation from '../../assets/icons/iconPresentation.svg';
import { Link } from 'react-router-dom';
import PageTransition from '../pageTransition/pageTransition.jsx';

const Presentation = () => {
    return (
        <PageTransition type='presentation'>
            <div className='div-presentation'>
                <div className='gradient-top'>
                    <h1>Iara & Juan</h1>
                </div>
                <div className='gradient-bottom'>
                    <Link to='/Home'><img src={IconPresentation} alt='down'/></Link>
                </div>
            </div>
        </PageTransition>
    );
};

export default Presentation;