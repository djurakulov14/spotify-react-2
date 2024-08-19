import React, { useContext, useEffect, useState } from 'react'
import TOKEN from '../Contexts/token';
import { useHttp } from '../Hooks/http.hook';
import MyPlaylist from '../Components/MyPlaylist';
import PlaylistList from '../Containers/Playlistlist';


const Home = () => {
	const [greeting, setGreeting] = useState('Hello');
    const [plaslists, setPlayslits] = useState([]);
	const [myPlaslists, setMyPlayslits] = useState([]);
	const [errorMsg, setErrorMsg] = useState('');

    const { loading, error, request } = useHttp();

	const token = useContext(TOKEN);

    useEffect(() => {
        let time = new Date().getHours()

		if(time > 18) {
			setGreeting("evening")
		} else if(time > 12) {
			setGreeting("afternoon")
		} else if(time >= 6) {
			setGreeting("morning")
		} else if(time >= 0) {
			setGreeting("night")
		}

		let date = new Date()
		let month = date.getMonth() + 1
		let timestamp = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + date.getHours() + ":" + date.getMinutes() + " UTC"
		timestamp = timestamp.replace(/-/g, "/")
		
		function dateIsValid(date) {
			return !Number.isNaN(new Date(date).getTime());
		}
		timestamp = dateIsValid(timestamp) ? new Date(timestamp).toISOString() : setErrorMsg('Not a valid date. Please try again')

        
		request(
			"https://api.spotify.com/v1/me/playlists?limit=50&offset=0",
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then((res) => {
			setMyPlayslits(res.items);
			console.log(res);
			
		});
		request(`https://api.spotify.com/v1/browse/featured-playlists?country=UZ&locale=uz&timestamp=${timestamp}&limit=50&offset=5`, 
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then(res => {
			setPlayslits(res?.playlists?.items)
			console.log(res);

			
		})
	}, []);


  return (

    <div className='m-auto rounded-xl mt-[80px] min-h-screen text-white p-[40px] w-[60%] bg-gradient-to-b from-[#444444] to-[#121212] '>
        <div className="greeting mb-[30px]">
            <span className=' font-bold text-5xl'>Good {greeting}</span>
        </div>
        <div className="2xl:grid-cols-3 grid grid-cols-2 gap-4 max-sm:gap-2 max-lg:grid-cols-1 ">
			{
				myPlaslists.map((item) => (
					<MyPlaylist key={item.id} {...item} />
				))
			}
		</div>
		<PlaylistList type={'songs'} errorMsg={errorMsg} plaslists={plaslists} title={"Made for you"} />
    </div>
  )
}

export default Home