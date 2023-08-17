import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div className='navBar'>
            <nav className='bg-grey-333 flex justify-center gap-24'>
                <Link className=" text-white hover:bg-red" to='/'>HOME</Link>
                <Link className=" text-white hover:bg-red" to='/Portfolio'>PORTFOLIO</Link>
                <Link className=" text-white hover:bg-red" to='/ContactForm'>CONTACT</Link>

            </nav>
        </div>
    )
}