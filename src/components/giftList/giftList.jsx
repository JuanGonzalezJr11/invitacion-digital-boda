import { useContext, useEffect } from 'react';
import './giftList.scss';
import { useLocation } from 'react-router-dom';
import { ContextUI } from '../context/context';

const GiftList = () => {
    const {savePath} = useContext(ContextUI);
    const location = useLocation();
    useEffect(() => {
      savePath(location.pathname)
    }, []);
    
    return (
        <div>
            <h1>¡Hola a todos!</h1>
        </div>
    );
};

export default GiftList;