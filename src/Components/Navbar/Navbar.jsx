import './Navbar.css'

function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Isti</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType: 'none'}}>
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>My Journey</li>
                        <li>About Me</li>
                    </ul>
                </div>
                <button className="button">Contact</button>
            </div>
        </div>
    );
}

export default Navbar;