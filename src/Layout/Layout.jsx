import NavBar from "../Components/NavBar";
import {Outlet} from 'react-router-dom'
import Player from "../Components/Player";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import Login from "../Components/Login";
import { useHttp } from '../Hooks/http.hook.js'
import TOKEN from "../Contexts/token.js";


function Layout() {
	const [user, setUser] = useState(null)
	const [token, setToken] = useState();
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

		request('https://api.spotify.com/v1/me', "GET", null,
		{
			Authorization: `Bearer ${token}`,
		}).then(res => {
			setUser(res)
			console.log(res);
			
		})
	}, []);

	if (!token) {
		return <Login />;
	}

    return (
      <>
        <NavBar/>
		<Header user={user}/>
		<TOKEN.Provider value={token}>
			<Outlet />
		</TOKEN.Provider>
		{/* <Player/> */}
      </>
     );
}

export default Layout;