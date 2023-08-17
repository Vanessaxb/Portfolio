import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div >
            <nav className='bg-gray-800 flex justify-center p-5 text-xl'>
                <Link className="mx-10 text-white hover:text-red-500 active:text-red-500 " to='/'>HOME</Link>
                <Link className="mx-10 text-white hover:text-red-500 active:text-red-500" to='/Portfolio'>PORTFOLIO</Link>
                <Link className="mx-10 text-white hover:text-red-500 active:text-red-500" to='/ContactForm'>CONTACT</Link>
                <Link className="mx-10 text-white hover:text-red-500 active:text-red-500" to='/ContactForm'>BLOG</Link>
            </nav>
        </div>
    )
}