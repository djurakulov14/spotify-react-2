import React, { useContext, useEffect, useState } from 'react'
import TOKEN from '../Contexts/token';
import { useHttp } from '../Hooks/http.hook';
import MyPlaylist from '../Components/MyPlaylist';


const Home = () => {
	const [greeting, setGreeting] = useState('Hello');
    const [plaslists, setPlayslits] = useState([]);
	const [myPlaslists, setMyPlayslits] = useState([]);
	const [releses, setReleses] = useState([]);
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
		});
		request(`https://api.spotify.com/v1/browse/featured-playlists?country=UZ&locale=uz&timestamp=${timestamp}&limit=50&offset=5`, 
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then(res => {
			setPlayslits(res?.playlists?.items)
		})
		request(`https://api.spotify.com/v1/browse/new-releases?country=UZ&limit=20&offset=5`, 
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then(res => {
			setReleses(res?.albums?.items)
		})
	}, []);


  return (

    <div className='absolute top-[80px] text-white p-[40px] right-0 w-[80%] h-full bg-gradient-to-b from-[#3333A3] to-[#121212] '>
        <div className="greeting mb-[30px]">
            <span className=' font-bold text-7xl'>Good {greeting}</span>
        </div>
        <div className="2xl:grid-cols-3 max-sm:grid-cols-2 grid grid-cols-2 gap-4 max-sm:gap-2 ">
			{
				myPlaslists.map((item) => (
					<MyPlaylist key={item.id} {...item} />
				))
			}
		</div>
    </div>
  )
}

export default Home