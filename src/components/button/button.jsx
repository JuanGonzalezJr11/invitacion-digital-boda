import './button.scss';

const button = ({type, text}) => {
    return (
        <button className={type}>{text}</button>
    );
};

export default button;