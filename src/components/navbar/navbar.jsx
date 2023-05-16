import './navbar.scss';
import IconButtonMenu from '../../assets/icons/iconButtonMenu.svg';
import IconButtonMenuActive from '../../assets/icons/iconButtonMenuActive.svg';
import IconButton from '../iconButton/iconButton.jsx';
import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const viewMenu = () => {
        setMenu(!menu);
    };

    return (
        <header>
            <div>
                <h1><span>Iara</span> & Juan</h1>
            </div>
            <div>
                <IconButton background='iconButton-normal' action={viewMenu} icon={IconButtonMenu}/>
            </div>
            <nav className={`${menu ? 'isActive' : ''}`}>
                <ul>
                    <li>Inicio</li>
                    <li>Fecha, hora y lugar</li>
                    <li>Dress code</li>
                    <li>Asistencia</li>
                    <li>Regalos</li>
                    <li>Playlist</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;