import { useContext, useEffect } from 'react';
import './giftList.scss';
import { Link, useLocation } from 'react-router-dom';
import { ContextUI } from '../context/context';
import Table from '../table/table.jsx';
import Button from '../button/button.jsx';

const GiftList = () => {
    const {savePath} = useContext(ContextUI);
    const location = useLocation();
    useEffect(() => {
      savePath(location.pathname)
    }, []);
    
    return (
        <div className='giftList-div'>
            <h1>Regalos</h1>
            <p>Acá tenemos una lista específica de las cosas que necesitamos y nos gustarían como regalo.</p>
            <Table />
            <Button type='button-primary-l' text='Reservar regalo'/>
            <p>También podes aportar para nuestra luna de miel transfiriendo al siguiente CBU:</p>
            <p className='p-cbu'>juangonzalezjr11.mp</p>
            <Link to='/Home'><Button type='button-secondary-m' text='Volver'/></Link>
        </div>
    );
};

export default GiftList;