import { useEffect, useState } from "react";
import "./App.css";

import './index.scss'
import Layout from './Layout/Layout.jsx'
import Home from "./Pages/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search.jsx";
import Playlist from "./Pages/Playlist.jsx";

function App() {
	


  return (
    <>
		<Routes>
            <Route path="/" element={<Layout/>} >
                <Route index element={<Home/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/playlist/:id" element={<Playlist/>} />
            </Route>
        </Routes>
    </>
  );
}

export default App;
