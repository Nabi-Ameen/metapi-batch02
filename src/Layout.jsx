import React from 'react'
import Header from './components/header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <div><Header /></div>
            <div>
                <Outlet />
            </div>
            {/* <div className='flex'> */}
            {/* <div className='w-2/12'>
                    <ul>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                    </ul>
                </div> */}

            {/* <div className='w-2/12'>
                    <ul>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                        <li>items</li>
                    </ul>
                </div> */}
            {/* </div> */}

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout