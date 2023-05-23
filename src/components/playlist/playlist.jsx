import './playlist.scss';
import IconPlaylist from '../../assets/icons/iconPlaylist.svg';
import Button from '../button/button.jsx';
import { Link } from 'react-router-dom';


const playlist = () => {
    return (
        <div className='playlist-div'>
            <img className='icon' src={IconPlaylist} alt='icon playlist'/>
            <h1>Playlist</h1>
            <p>¿Te gustaría sugerir algún tema?</p>
            <Link to='/PlaylistSuggestion'><Button type='button-primary-l' text='Sugerir canción' /></Link>
        </div>
    );
};

export default playlist;