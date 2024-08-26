import React, { useContext, useEffect, useState } from 'react'
import TOKEN from '../Contexts/token';
import { useHttp } from '../Hooks/http.hook';
import PlaylistCard from '../Components/PlaylistCard';
import PlaylistList from '../Containers/Playlistlist';

function AllPlaylists() {
	const [myPlaylists, setMyPlayLists] = useState({});
	const { loading, error, request } = useHttp();
	const [errorMsg, setErrorMsg] = useState('');


	const token = useContext(TOKEN);

	const more = (status) => {
		request(
			myPlaylists.playlists.next,
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then((res) => {

			setMyPlayLists(res)
				
			
		});
	}

	useEffect(() => {

		request(
			"https://api.spotify.com/v1/browse/featured-playlists",
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then((res) => {

			setMyPlayLists(res)	
			
			
		});
	}, []);
	return (
		<>
			<div className='m-auto rounded-xl mb-[100px] top-[80px] mt-[80px] min-h-screen text-white p-[40px] w-[60%] bg-gradient-to-b from-[#444444] to-[#121212] '>
			<div className="flex items-center justify-between max-md:flex-wrap max-sm-flex-wrap">
				<h2 className="max-sm:text-[22px] text-white text-3xl font-bold mb-4">
					{myPlaylists?.message}
				</h2>
				<div className="btns flex gap-3">
					<button
						onClick={() => more('prev')}
						className="max-sm:text-[14px] text-[#ADADAD] text-base font-bold uppercase"
					>
						{/* {type === "songs" ? all ? 'Close' : 'See all' : ''} */}
						Prev
					</button>
					<button
						onClick={() => more('next')}
						className="max-sm:text-[14px] text-[#ADADAD] text-base font-bold uppercase"
					>
						{/* {type === "songs" ? all ? 'Close' : 'See all' : ''} */}
						NEXT
					</button>
				</div>
			</div>
			<div className="all-playlists_box max-2xl:grid-cols-5 max-md:grid-cols-3 max-lg:grid-cols-4 max-sm:grid-cols-2 max-[400px]:grid-cols-2 w-full max-w-full mt-5 grid grid-cols-5 gap-6">
				{
										
					myPlaylists?.playlists?.items?.map(item => <PlaylistCard key={item.id} item={item} />)
					
				}
			</div>
			</div>
		</>
	);
}

export default AllPlaylists;