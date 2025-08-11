const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                 <img className="logo" 
                 src="https://i.ibb.co/vCS8Tb0S/Feasto-removebg-preview-5-1.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><b>Home</b></li>
                    <li><b>About Us</b></li>
                    <li><b>Contact Us</b></li>
                    <li><b>Cart</b></li>
                </ul>
            </div>
        </div> 
    );
};

export default Header;