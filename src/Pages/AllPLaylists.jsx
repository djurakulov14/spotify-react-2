import React, { useContext, useEffect, useState } from 'react'
import TOKEN from '../Contexts/token';
import { useHttp } from '../Hooks/http.hook';
import PlaylistCard from '../Components/PlaylistCard';

function AllPlaylists() {
	const [myPlaylists, setMyPlayLists] = useState([]);
	const { loading, error, request } = useHttp();

	const token = useContext(TOKEN);

	useEffect(() => {

		request(
			"https://api.spotify.com/v1/me/playlists?limit=50&offset=0",
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then((res) => {

			setMyPlayLists(res.items)
			console.log(res);


		});
	}, []);
	return (
		<>
			<div className='m-auto rounded-xl mt-[80px] min-h-screen text-white p-[40px] w-[60%] bg-gradient-to-b from-[#444444] to-[#121212] '>
				<h1 className='text-[30px] font-[600]'>All playlists</h1>
				<div className="2xl:grid-cols-3 grid grid-cols-2 gap-4 max-sm:gap-2 max-lg:grid-cols-1 ">
					{
						myPlaylists.map((item) => {
							<PlaylistCard key={item.id} {...index} />
						})
					}
				</div>

			</div>
		</>
	);
}

export default AllPlaylists;