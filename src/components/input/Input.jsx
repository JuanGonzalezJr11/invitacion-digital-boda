import './Input.scss';

const Input = ({type}) => {
    return (
        <div className='input-div'>
            <input className={type}/>
        </div>
    );
};

export default Input;