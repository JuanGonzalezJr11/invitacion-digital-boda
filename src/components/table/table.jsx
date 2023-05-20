import './table.scss';

const Table = () => {
    return (
        <div className='table-div'>
            <table>
                <th>Lista de regalos</th>
                <tr>
                    {/* Hacer un for que recorra toda la lista de regalos e ir insertanto cada regalo en una nueva fila */}
                    <div>
                        <p>Heladera</p>
                    </div>
                    <div>
                        <p className='p-link'>Ver</p>
                    </div>
                </tr>
                <tr>Juego de mesa</tr>
            </table>
        </div>
    );
};

export default Table;