import currentTrack from "../Contexts/currentTrack.js";
import NavBar from "../Components/NavBar";
import {Outlet, useNavigate} from 'react-router-dom'
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import Login from "../Pages/Login.jsx";
import { useHttp } from '../Hooks/http.hook.js'
import TOKEN from "../Contexts/token.js";
import RightAside from "../Components/RightAside.jsx";
import Player from "../Components/Player.jsx";
import searchContext from "../Contexts/searchContext.js";

function Layout() {
	const [user, setUser] = useState(null)
	const [token, setToken] = useState();
	const [navPlaylists, setNavPlaylists] = useState([])
	const [searchText, setSearchText] = useState('')
	const [track, setTrack] = useState({
		isPLaying: false,
		track: "",
	});
	const {request} = useHttp()
	const navigate = useNavigate("/login");

	const changeTrack = (data) => {
		setTrack(data);
	};

	const changeSearchText = (text) => {
		setSearchText(text)
	}

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
	}, []);

	if (!token) {
		navigate('/login')
	}

    return (
    <>
	  	<searchContext.Provider value={{searchText, changeSearchText}} >
			<currentTrack.Provider value={{ track, changeTrack }}>
				<NavBar navPlaylists={navPlaylists}/>
				<Header user={user}/>
				<RightAside/>
				<TOKEN.Provider value={token}>
					<Outlet />
				</TOKEN.Provider>
				<Player/>
			</currentTrack.Provider>
	  	</searchContext.Provider>
    </>
     );
}

export default Layout;