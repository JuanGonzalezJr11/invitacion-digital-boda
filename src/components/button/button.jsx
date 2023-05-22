import './button.scss';

const button = ({type, text, onClick}) => {
    return (
        <button className={type} onClick={onClick}>{text}</button>
    );
};

export default button;