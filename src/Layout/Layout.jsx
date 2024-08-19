import NavBar from "../Components/NavBar";
import {Outlet} from 'react-router-dom'
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import Login from "../Components/Login";
import { useHttp } from '../Hooks/http.hook.js'
import TOKEN from "../Contexts/token.js";
import RightAside from "../Components/RightAside.jsx";
import Player from "../Components/Player.jsx";


function Layout() {
	const [user, setUser] = useState(null)
	const [token, setToken] = useState();
	const [track, setTrack] = useState([])
	const [navPlaylists, setNavPlaylists] = useState([])
	const {request} = useHttp()



	useEffect(() => {
		const hash = window.location.hash;
		let token = window.localStorage.getItem("token");

		if (!token && hash) {
			token = hash
				.substring(1)
				.split("&")
				.find((elem) => elem.startsWith("access_token"))
				.split("=")[1];

			window.location.href = "";
			window.localStorage.setItem("token", token);
		}

		setToken(token);

		request(
			"https://api.spotify.com/v1/me/playlists?limit=50&offset=0",
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then((res) => {
			setNavPlaylists(res.items);
		});

		request('https://api.spotify.com/v1/me', "GET", null,
		{
			Authorization: `Bearer ${token}`,
		}).then(res => {
			setUser(res)			
		})

		request('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/tracks?market=uz', "GET", null,
			{
				Authorization: `Bearer ${token}`,
			}).then(res => {
				setTrack(res.items[0])								
			})
	}, []);

	if (!token) {
		return <Login />;
	}

    return (
      <>
        <NavBar navPlaylists={navPlaylists}/>
		<Header user={user}/>
		<RightAside/>
		<TOKEN.Provider value={token}>
			<Outlet />
		</TOKEN.Provider>
		<Player curTrack={track}/>
      </>
     );
}

export default Layout;