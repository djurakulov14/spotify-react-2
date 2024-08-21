import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const NavPlaylist = ({ id, images, name, tracks }) => {
	const navigate = useNavigate("/playlist/name");


	const showPlaylist = () => {
		navigate("/playlist/id=" + id, { state: {track: tracks.href, img: images[0]?.url, id} });
	};

	return (
		<Link
			to={"/playlist/:id=" + id}
			className="flex rounded-lg p-2 max-sm:rounded-sm overflow-hidden hover:bg-[#ffffff20] w-full cursor-pointer"
		>
			<img
				src={images[0]?.url}
				className="w-[25%] h-[100%] max-sm:w-[50px] rounded-lg"
				alt=""
			/>
			<div className="px-[21px] py-{28px} flex flex-col items-start justify-center ">
				<p className="font-semibold text-lg max-sm:text-sm text-white truncate capitalize">
					{name}
				</p>
                <p className=' text-[#B3B3B3]'>Playlist - Spotify</p>
			</div>
		</Link>
	);
}

export default NavPlaylist