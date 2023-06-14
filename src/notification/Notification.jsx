import { createContext, useState } from 'react';
import './Notification.scss';

const Notification = ({msg='', severity}) => {
    console.log('notificacion')
    if(msg === '') return
    return (
        <div className={severity === 'success' ? 'div-Notification success' : 'div-Notification error'}>
            {msg}
        </div>
    );
}

export const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success')
    const setNotification = (severity, msg) => {
        setMessage(msg);
        setSeverity(severity);
        setTimeout(() => {
            setMessage('');
        }, 5000);
    };

    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification msg={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}