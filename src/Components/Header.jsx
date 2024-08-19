import React, { useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const Header = ({user}) => {
    
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const localStorageClear = () => {
		localStorage.clear();
		window.location = window.location.href;
        handleClose()
	};


  return (
    <header className=' w-[80%] fixed top-0 z-10 right-0 py-[20px] px-[40px] flex justify-between items-center bg-[#3333A3]'>
        <div className="left flex gap-5">
            <button onClick={() => navigate(-1)} className=' p-1 text-center flex flex-col items-center bg-[#00000080] rounded-full'> 
                <IoIosArrowBack size={40} color='white'/>
            </button>
            <button  onClick={() => navigate(1)}className=' p-1 text-center flex flex-col items-center bg-[#00000080] rounded-full'>
                <IoIosArrowForward size={40} color='white'/>
            </button>
        </div>
        <div className=" p-2 right h-[40px] flex gap-[10px] items-center rounded-full bg-[#00000080] text-white">
            
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {open ? <IoMdArrowDropup size={40} color='white'/> : <IoMdArrowDropdown size={40} color='white'/>}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={localStorageClear}>Logout</MenuItem>
            </Menu>
        </div>
    </header>
  )
}

export default Header