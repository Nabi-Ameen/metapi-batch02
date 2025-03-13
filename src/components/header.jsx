import React from 'react'
import logo from "../assets/logo.png"
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Link, NavLink, } from "react-router-dom"
import { menuItems } from '../assets/products';

const Header = () => {
    // const location = useLocation();
    return (
        <div className='bg-blue-700 flex flex-col items-center justify-center'>
            <div>
                <ul className='flex items-center gap-6'>
                    {menuItems.map((menu, index) => {
                        return (
                            // <Link to={menu.menuLink}>
                            //     <li className={`text-gray-300 font-semibold p-2 ${location?.pathname === menu?.menuLink && "text-purple-950 border-b border-purple-950"} `}>{menu?.menuLabel}</li>
                            // </Link>
                            <NavLink key={index} to={menu.menuLink} className={({ isActive }) => isActive ? "text-purple-950 border-b border-purple-950" : "text-gray-300 font-semibold p-2"}>
                                <li>{menu?.menuLabel}</li>
                            </NavLink>
                        )
                    })
                    }
                </ul>
            </div>
            <div className='p-6 px-12 flex items-center gap-4 w-6/12'>
                <div>
                    <img src={logo} alt="" width={100} />
                </div>
                <div className='flex'>
                    <div>
                        <input type="text" className='p-2 w-[500px] outline-none rounded-sm' />
                    </div>
                    <div className='p-2 bg-red-200'>
                        <IoSearch size={24} />
                    </div>
                </div>
                <div>
                    <FiShoppingCart size={24} />
                </div>
            </div>
        </div>
    )
}

export default Header