import icon from '../assets/Icon.png'

export const Header = (props) => {
    return (
        <div className="header-container">
            <div className="logo">
                <img src={icon} alt="Conversor icon" />
                <h3 className='logo-text'>unit converter</h3>
            </div>
        </div>
    );
}