import './iconButton.scss'

const iconButton = ({background, icon}) => {
    return (
        <button className={background}><img src={icon}/></button>
    )
}

export default iconButton;