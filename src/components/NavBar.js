import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className='bg-white flex justify-center gap-24'>
            <Link className=" text-gray-800 hover:bg-white" to='/'>Home</Link>
            <Link to='/Portfolio'>Portfolio</Link>
            <Link to='/ContactForm'>Contact</Link>

        </nav>
    )
}