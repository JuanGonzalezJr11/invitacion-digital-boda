import './playlist.scss';
import IconPlaylist from '../../assets/icons/iconPlaylist.svg';
import Button from '../button/button.jsx';

const playlist = () => {
    return (
        <div className='playlist-div'>
            <img className='icon' src={IconPlaylist} alt='icon playlist'/>
            <h1>Playlist</h1>
            <p>¿Te gustaría sugerir alguna canción para el baile?</p>
            <Button type='button-primary-l' text='Sugerir canción' />
        </div>
    );
};

export default playlist;