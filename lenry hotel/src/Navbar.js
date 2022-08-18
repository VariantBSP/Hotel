import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link className='logo' to="/"><h1>Lenry Hotels &#38; Suites</h1></Link>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Contact Us</Link>
                <Link to="/about">About Us</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;