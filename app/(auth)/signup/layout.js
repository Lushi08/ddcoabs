import React from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/app/(components)/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sign Up | DDC-OABS',
  description: 'Registration Page',
}

const RegisterLayout = ({children}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-col justify-between bg-gradient-to-r from-teal-700 to-blue-800 bg-cover min-h-screen max-w-full'>
          {children}
          <div className='text-white'><Footer/></div>
        </div>
      </body>
    </html>
  )
}

export default RegisterLayout