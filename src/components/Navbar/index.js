import "./styles.css"
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Campeonato</Link></li>
                <li><Link to="/calendar">Calendario</Link></li>
                <li><Link to="/upload">Upload</Link></li>
                <li><a href="#">Comparativo</a></li>
            </ul>
        </nav>
    )
}

export { Navbar }