function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Isti</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>My journey</li>
                        <li>About me</li>
                    </ul>
                    <button className="button">Contact</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;