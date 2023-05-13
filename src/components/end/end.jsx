import './end.scss';
import ImageEnd from '../../assets/images/img-end-edit.jpg';

const end = () => {
    return (
        <div className='end-div'>
            <img className='photo' src={ImageEnd} alt='image end' />
            <p>Nos vemos pronto</p>
            <p className='end-p'>¡Te esperamos!</p>
        </div>
    );
};

export default end;