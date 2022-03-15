import { Link } from 'react-router-dom';
import './nav.css';
export const Nav = () => {
    return (
        <div>
            <header className="header-continer">
                <Link to='/Home' className="nav-link">Home</Link>
                <Link to='/Tourism' className="nav-link">Tourism</Link>
                <Link to='/Fitness' className="nav-link">Fitness</Link>
                <Link to='/Technology' className="nav-link">Technology</Link>
                <Link to='/Bollywood' className="nav-link">Bollywood</Link>
                <Link to='/Food' className="nav-link">Food</Link>
            </header>
        </div>
    )
}