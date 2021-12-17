import React from 'react'
import home from "../../assets/icon/Home.svg"
import transaction from "../../assets/icon/Transaction.svg"
import profile from "../../assets/icon/Profile.svg"
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='bg-light-gray bottom-0 min-w-full h-24 absolute text-dark-green font-semibold flex justify-around items-center py-12'>
            <NavLink to='' className={(param) => param.isActive ? 'font-bold border-b-2 border-dark-green' : ''}>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-7 mb-1' src={home} alt="home-icon" />
                    <p>Home</p>
                </div>
            </NavLink>
            <NavLink to='/transaction' className={(param) => param.isActive ? 'font-bold border-b-2 border-dark-green' : ''}>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-7 mb-1' src={transaction} alt="transaction-icon" />
                    <p>Transaction</p>
                </div>
            </NavLink>
            <NavLink to='/profile' className={(param) => param.isActive ? 'font-bold border-b-2 border-dark-green' : ''}>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-7 mb-1' src={profile} alt="profile-icon" />
                    <p>Profile</p>
                </div>
            </NavLink>
        </div>
    )
}
