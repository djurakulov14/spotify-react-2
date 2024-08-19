import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LuLibrary } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import NavPlaylist from './NavPlaylist';

const NavBar = ({navPlaylists}) => {
  return (
<nav className="mainLeftBlock px-6 bg-black h-screen fixed left-0 top-0 text-white w-[20%] flex flex-col gap-5">
            <div className="box bg-[#121212] rounded-2xl p-5">
                <div className="top flex flex-col gap-8">
                    <NavLink 
                    style={({ isActive }) => ({
                        color: isActive ? "#ffffff" : "inherit",
                    })}
                    to='/' 
                    className="links ">
                        <img src="../../Home_Fill_S.svg" alt="" />
                        <span className='hover:text-white'>Home</span>
                    </NavLink>
                    <NavLink
                    style={({ isActive }) => ({
                        color: isActive ? "#ffffff" : "inherit",
                    })}
                    className='links ' 
                    to='/search'>
                        <img src="../../Search_S.svg" alt="" />
                        <span className='hover:text-white'>Search</span>
                    </NavLink>
                </div>
            </div>
            <div className="bot bg-[#121212] rounded-2xl p-5">
                <div className="top flex justify-between items-center mb-5">
                    <div className="links left flex gap-3 items-center">
                        <LuLibrary  size={30}/>
                        <span className='hover:text-white'>Моя Медиатека</span>
                    </div>
                    <GoPlus size={30}/>

                </div>
                {/* <GoSearch/> */}
                <div className="playlists flex flex-col gap-3">
                    {
                        navPlaylists.map(item => <NavPlaylist key={item.id} {...item} />)
                    }
                </div>
            </div>
        </nav>
  )
}

export default NavBar