import React, { useContext, useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import searchContext from '../Contexts/searchContext';

const Header = ({user}) => {
    
    const navigate = useNavigate();
	const location = useLocation();
	const {searchText, changeSearchText} = useContext(searchContext);


    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const localStorageClear = () => {
        navigate('/login')
		localStorage.clear();
		window.location = window.location.href;
        handleClose()
	};


  return (
    <header className=' rounded-tr-xl rounded-tl-xl w-[60%] fixed top-0 z-10 left-[20%] py-[20px] px-[40px] flex justify-between items-center bg-[#444444] max-2xl:w-[70%] max-2xl:left-[30%] max-md:w-full max-md:left-0 max-lg:h-[85px] max-lg:p-2'>
        <div className="left flex gap-5 max-lg:gap-2">
            <button onClick={() => navigate(-1)} className=' p-1 text-center flex flex-col items-center bg-[#00000080] rounded-full max-md:w-[32px] max-md:h-[32px]'> 
                <IoIosArrowBack size={40} color='white' className=""/>
            </button>
            <button  onClick={() => navigate(1)}className=' p-1 text-center flex flex-col items-center bg-[#00000080] rounded-full max-md:w-[32px] max-md:h-[32px]'>
                <IoIosArrowForward size={40} color='white' className=""/>
            </button>
            {location.pathname === "/search" ? (
					<div className="mob-inp h-12 flex gap-2 w-full rounded-full items-center bg-white py-[12px] px-[18px] mx-[20px] max-sm:absolute top-20 left-2 max-sm:mx-0 max-sm:w-[95%] max-sm:rounded-sm" >
						<FiSearch size="27" color="black" />
						<input
							className="xl:w-[270px] lg:w-[270px] md:w-[270px] sm:w-[270px] w-full h-[25px] outline-none text-[22px] text-black"
							placeholder="Что хочешь включить?"
							type="text"
							defaultValue={searchText}
							onChange={(e) => changeSearchText(e.target.value)}
						/>
					</div>
				) : null}
        </div>
        <div className=" p-2 right h-[40px] flex gap-[10px] items-center rounded-full bg-[#00000080] text-white max-md:h-[35px] max-sm:gap-1">
            <img className=' h-[34px] rounded-full max-lg:h-[26px]' src={user ? user?.images[0].url : '/user.png'} alt="user" />
            <span>{user?.display_name}</span>
            <Button
                className=' w-5'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {open ? <IoMdArrowDropup  size={40} color='white'/> : <IoMdArrowDropdown size={40} color='white'/>}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to={'/profile'}>Profile</Link></MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={localStorageClear}>Logout</MenuItem>
            </Menu>
        </div>
    </header>
  )
}

export default Header