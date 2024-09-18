import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'>
            <li><NavLink className={(e) => e.isActive ? "red" : ""} to='/'>Home</NavLink></li>
            <li><NavLink className={(e) => e.isActive ? "red" : ""} to='/login'>Login</NavLink></li>
            <li><NavLink className={(e) => e.isActive ? "red" : ""} to='/user'>User</NavLink></li>
        </div>
    )
}

export default Navbar;
