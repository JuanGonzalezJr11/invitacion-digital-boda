import './navbar.scss';
import IconButtonMenu from '../../assets/icons/iconButtonMenu.svg';
import IconButtonMenuActive from '../../assets/icons/iconButtonMenuActive.svg';
import IconButton from '../iconButton/iconButton.jsx';
import { useState } from 'react';

const Navbar = ({action}) => {
    const [menu, setMenu] = useState(false);
    const [icon,setIcon] = useState(true);
    
    const viewMenu = () => {
        setMenu(!menu);
        setIcon(!icon);
    };

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
                    <li><button onClick={(e) => action(0)}>Inicio</button></li>
                    <li><button onClick={(e) => action(1)}>Fecha y hora</button></li>
                    <li><button onClick={(e) => action(2)}>Lugar</button></li>
                    <li><button onClick={(e) => action(3)}>Dress code</button></li>
                    <li><button onClick={(e) => action(4)}>Asistencia</button></li>
                    <li><button onClick={(e) => action(5)}>Regalos</button></li>
                    <li><button onClick={(e) => action(6)}>Playlist</button></li>
                    <li className='li-end'><button>Login</button></li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;