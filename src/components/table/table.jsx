import './table.scss';
import { ContextUI } from '../context/context';
import React, { useContext, useEffect } from 'react';

const Table = ({listContainer}) => {
    const {saveGift, gift} = useContext(ContextUI);

    useEffect(() => {
      saveGift('');
    }, []);

    const onClickReserva = (gift, available) => {
        if(available){
            saveGift(gift);
        }
    };

    return (
        <div className='table-div'>
            <table>
                <tbody>
                    <th>Lista de regalos</th>
                    {
                        listContainer.map(i => (
                        <tr key={i.id} onClick={(e) => onClickReserva(i.gift, i.available)} className={gift === i.gift ? 'pressed' : ''}>
                            <div><p className={i.available === false ? 'reserved' : ''}>{i.gift}</p></div>
                            <div><a href={i.link} target='_blank' rel='noreferrer'><p className='p-link'>Ver</p></a></div>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;