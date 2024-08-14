import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
<nav className="mainLeftBlock">
            <div className="box">
                <div className="top">
                    <Link  to='/' className="active links">
                        <img src="../../Home_Fill_S.svg" alt="" />
                        <span>Home</span>
                    </Link>
                    <Link className='links' to='/search'>
                        <img src="../../Search_S.svg" alt="" />
                        <span>Search</span>
                    </Link>
                    <div>
                        <img src="../../Library_S.svg" alt="" />
                        <span>Library</span>
                    </div>
                    <div className="addLibrary">
                        <img src="../../+Library_S.svg" alt="" />
                        <span>Create Playlist</span>
                    </div>
                    <div className="active">
                        <img src="../../Liked Songs_S.svg" alt="" />
                        <span>Liked Songs</span>
                    </div>
                </div>
            </div>

            <div className="line"></div>
            <div className="box1">
                <div className="bottom">
                    <div className="navigation">
                        <p>Chill Mix</p>
                        <p>Insta Hits</p>
                        <p>Your Top Songs 2021</p>
                        <p>Mellow Songs</p>
                        <p>Anime Lofi & Chillhop Music</p>
                        <p>BG Afro “Select” Vibes</p>
                        <p>Afro “Select” Vibes</p>
                        <p>Happy Hits!</p>
                        <p>Deep Focus</p>
                        <p>Instrumental Study</p>
                        <p>OST Compilations</p>
                        <p>Nostalgia for old souled mill...</p>
                        <p>Mixed Feelings</p>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default NavBar