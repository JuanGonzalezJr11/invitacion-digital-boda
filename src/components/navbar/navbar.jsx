import './navbar.scss';
import IconButtonMenu from '../../assets/icons/iconButtonMenu.svg';
import IconButton from '../iconButton/iconButton.jsx';

const navbar = () => {
    return (
        <nav>
            <div>
                <h1><span>Iara</span> & Juan</h1>
            </div>
            <div>
                <IconButton background='iconButton-normal' icon={IconButtonMenu}/>
            </div>
        </nav>
    )
};

export default navbar;