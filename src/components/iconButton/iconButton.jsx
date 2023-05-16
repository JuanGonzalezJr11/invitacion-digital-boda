import './iconButton.scss'

const iconButton = ({background, icon, action}) => {
    return (
        <button className={background} onClick={action}><img src={icon} alt='icon menu'/></button>
    )
}

export default iconButton;