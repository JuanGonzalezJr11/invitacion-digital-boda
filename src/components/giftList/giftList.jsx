import { useContext, useEffect, useState } from 'react';
import './giftList.scss';
import { Link, useLocation } from 'react-router-dom';
import { ContextUI } from '../context/context';
import Table from '../table/table.jsx';
import Button from '../button/button.jsx';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../service/firebase';

const GiftList = () => {
    const {savePath, gift} = useContext(ContextUI);
    const location = useLocation();
    
    const redirectionWhatSapp = () => {
        const message = encodeURIComponent(`Hola, te voy a reservar ${gift}.`);
        window.open(`https://wa.me/3512006119?text=${message}`);
    } 

    useEffect(() => {
      savePath(location.pathname)
    }, []);

    const [giftAdapter, setGiftAdapter] = useState([]);
    useEffect(() => {
        const collectionRef = collection(db, 'Gift');
        getDocs(collectionRef).then(response => {
            const giftAdapter = response.docs.map(gift => {
                const data = gift.data();
                console.log({id: gift.id, ...data});
                return {id: gift.id, ...data};
            });
            setGiftAdapter(giftAdapter);
        });
    }, []);
    

    return (
        <div className='giftList-div'>
            <h1>Regalos</h1>
            <p>Acá tenemos una lista específica de las cosas que necesitamos y nos gustarían como regalo.</p>
            <Table listContainer={giftAdapter}/>
            <Button type='button-primary-l' text='Reservar regalo' onClick={redirectionWhatSapp} />
            <p>También podes aportar para nuestra luna de miel transfiriendo al siguiente CBU:</p>
            <p className='p-cbu'>juangonzalezjr11.mp</p>
            <Link to='/Home'><Button type='button-secondary-m' text='Volver'/></Link>
        </div>
    );
};

export default GiftList;