import './navbar.scss';
import IconButtonMenu from '../../assets/icons/iconButtonMenu.svg';
import IconButtonMenuActive from '../../assets/icons/iconButtonMenuActive.svg';
import IconButton from '../iconButton/iconButton.jsx';
import { useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

const Navbar = ({action}) => {
    const [menu, setMenu] = useState(false);
    const [icon,setIcon] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const viewMenu = () => {
        setMenu(!menu);
        setIcon(!icon);
    };

    const goBack = (index) => {
        // Se puede hacer un array de las rutas
        if(location.pathname === '/GiftList'){
            navigate('/Home');
            setTimeout(() => {
                action(index);
            }, 1);
        }else{
            action(index);
        }
        viewMenu();
    }

    return (
        <header>
            <div>
                <h1><span>Iara</span> & Juan</h1>
            </div>
            <div>
                <IconButton background='iconButton-normal' action={viewMenu} icon={icon === true ? IconButtonMenu : IconButtonMenuActive }/>
            </div>
            <nav className={`${menu ? 'isActive' : ''}`}>
                <ul>
                    <li><button onClick={(e) => goBack(0)}>Inicio</button></li>
                    <li><button onClick={(e) => goBack(1)}>Fecha y hora</button></li>
                    <li><button onClick={(e) => goBack(2)}>Lugar</button></li>
                    <li><button onClick={(e) => goBack(3)}>Dress code</button></li>
                    <li><button onClick={(e) => goBack(4)}>Asistencia</button></li>
                    <li><button onClick={(e) => goBack(5)}>Regalos</button></li>
                    <li><button onClick={(e) => goBack(6)}>Playlist</button></li>
                    <li className='li-end'><button>Login</button></li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;