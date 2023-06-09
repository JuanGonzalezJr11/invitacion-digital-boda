import { useContext, useEffect, useState } from 'react';
import './giftList.scss';
import { Link, useLocation } from 'react-router-dom';
import { ContextUI } from '../context/context';
import Table from '../table/table.jsx';
import Button from '../button/button.jsx';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../service/firebase';
import PageTransition from '../pageTransition/pageTransition.jsx';
import Footer from '../footer/footer.jsx';
import { NotificationContext } from '../../notification/Notification';

const GiftList = () => {
    const {savePath, gift} = useContext(ContextUI);
    const location = useLocation();
    const {setNotification} = useContext(NotificationContext);
    
    const redirectionWhatsApp = () => {
        if(gift.length === 0) {
            return setNotification('error', 'Debe seleccionar un regalo del listado.');
        }
        const message = encodeURIComponent(`Hola Juan y Iara, queremos reservales el siguiente regalo: ${gift}.`);
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
        <PageTransition>
            <div className='giftList-div'>
                <h1>Regalos</h1>
                <p>Acá tenemos una lista de las cosas que necesitamos y nos gustarían como regalo.</p>
                <Table listContainer={giftAdapter}/>
                <Button type='button-primary-l' text='Reservar regalo' onClick={redirectionWhatsApp} />
                <p>También podes aportar para nuestra luna de miel transfiriendo a la siguiente cuenta:</p>
                <p>Alias:</p>
                <p className='p-cbu'>iara.vila.bru</p>
                <p>CBU:</p>
                <p className='p-cbu'>1430001713019384870015</p>
                <p className='p-cbu-end'>Iara Belen Vilaboa Silveira</p>
                <Link to='/Home'><Button type='button-secondary-m' text='Volver'/></Link>
            </div>
            <Footer />
        </PageTransition>
    );
};

export default GiftList;