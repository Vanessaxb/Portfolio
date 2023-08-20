import {NavLink} from 'react-router-dom'


export default function NavBar() {
    return (
        <div >
            <nav className='bg-slate-700 flex justify-center p-4 md:p-4 text-lx md:text-2xl posit fixed top-0 w-full  z-10 font-raleway items-start '>
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