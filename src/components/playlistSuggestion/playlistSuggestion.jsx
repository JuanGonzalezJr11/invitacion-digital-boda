import './playlistSuggestion.scss';
import Input from '../input/Input.jsx';
import Button from '../../components/button/button.jsx';
import { Link } from 'react-router-dom';

const PlaylistSuggestion = () => {
    return (
        <div className='playlistSuggestion-div'>
            <h1>Playlist</h1>
            <div className='div-form'>
                <div className='input-group'>
                    <p>Artista:</p>
                    <Input type='input-xl'/>
                </div>
                <div className='input-group'>
                    <p>Canción:</p>
                    <Input type='input-xl'/>
                </div>
            </div>
            <Button type='button-primary-m' text='Enviar' />
            <Link to='/Home'><Button type='button-secondary-m' text='Volver' /></Link>
        </div>
    );
};

export default PlaylistSuggestion;