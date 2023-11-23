"use client"
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const links = [
        {
            id: 1,
            title: "Home",
            url: "/dashboard",
        },
        {
            id: 2,
            title: "Profile",
            url: "/profile",
        },
        {
            id: 3,
            title: "Services",
            url: "/clinicservices",
        },
        {
            id: 4,
            title: "Appointments",
            url: "/appointments",
        },
    ]

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className='bg-gradient-to-r from-teal-600 to-blue-700 px-4 md:px-20 flex justify-between items-center py-2'>
            <Link href="/" className='font-bold text-lg'>
                <Image
                    src="/logo.png"
                    alt="DentFix Logo"
                    width={150}
                    height={150}
                    className='mix-blend-screen'
                />
            </Link>
            <button
                onClick={toggleMenu}
                className={`text-slate-300 hover:text-white md:hidden ${showMenu ? 'hidden' : 'block'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <div className={`md:flex items-center gap-8 text-sm font-medium ${showMenu ? 'flex' : 'hidden'}`}>
                {links.map(link => (
                    <Link key={link.id} href={link.url} className='text-slate-300 hover:text-white'>{link.title}</Link>
                ))}
                <Link href="/appointments" className='text-blue-700 bg-slate-50 px-2 rounded-full hover:text-blue-700'>Book Now</Link>
                <button onClick={() => { console.log("logged out") }} className='text-slate-300 hover:text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
            </button>
            </div>
        </div>
    )
}

export default Navbar;

