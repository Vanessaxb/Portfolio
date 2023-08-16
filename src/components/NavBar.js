import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/Portfolio'>Portfolio</Link>
            <Link to='/ContactForm'>Contact</Link>

        </nav>
    )
}