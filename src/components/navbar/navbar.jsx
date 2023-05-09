import './navbar.scss';
// import iconButtonMenu from './src/assets/icons/menu_black_24dp.svg';
import IconButtonMenu from '../../assets/icons/menu_black_24dp.svg';
import IconButton from '../iconButton/iconButton.jsx';

const navbar = () => {
    return (
        <nav>
            <div>
                <h1><span>Iara</span> & Juan</h1>
            </div>
            <div>
                <IconButton background='hola'/>

            </div>
        </nav>
    )
};

export default navbar;