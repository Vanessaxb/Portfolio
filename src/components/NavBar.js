import {Link, NavLink} from 'react-router-dom'


export default function NavBar() {
    return (
        <div >
            <nav className='bg-gray-700 flex justify-center p-5 text-xl posit fixed top-0 w-full z-10 font-raleway'>
                <NavLink to='/'
                        className={({ isActive }) =>
                        isActive ? "text-red-500 font-bold mx-10" : "text-white hover:text-red-500 mx-10"
                    }> HOME
                </NavLink>
                <NavLink className={({ isActive }) =>
                isActive ? "text-red-500 font-bold mx-10" : "mx-10 text-white hover:text-red-500"} to='/Portfolio'>PORTFOLIO</NavLink>
                <NavLink className={({ isActive }) =>
                isActive ? "text-red-500 font-bold mx-10" : "mx-10 text-white hover:text-red-500"}  to='/ContactForm'>CONTACT</NavLink>
                <NavLink className={({ isActive }) =>
                isActive ? "text-red-500 font-bold mx-10" : "mx-10 text-white hover:text-red-500"}  to='/Blog'>BLOG</NavLink>
            </nav>
        </div>
    )
}