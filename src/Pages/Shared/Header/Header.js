import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/download.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogOut = () => {
        logout()
            .then()
            .catch();
    }

    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="flex-1">
                <img src={logo} alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-xl">Computer Mania</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold'><Link to='/'>Home</Link></li>
                    <li className='font-semibold'><Link to='/'>About Us</Link></li>
                    <li tabIndex={0}>
                        <a>
                            Services
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li><a>Battery replace</a></li>
                            <li><a>Data recovery</a></li>
                            <li><a>Leptop repair</a></li>
                        </ul>
                    </li>

                    {
                        user?.email ?
                            <>
                                <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
                                <li className='font-semibold'>
                                    <button onClick={handleLogOut} className="btn-ghost">Sign Out</button>
                                </li>
                            </>
                            :
                            <li className='font-semibold'><Link to='/login'>Login</Link></li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;