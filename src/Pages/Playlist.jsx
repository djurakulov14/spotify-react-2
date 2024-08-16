import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../Hooks/http.hook';
import TOKEN from '../Contexts/token';
import { useLocation } from 'react-router-dom';

const Playlist = () => {
    const [tracks, setTracks] = useState([]);
    const [album, setAlbum] = useState(null);
    const {error, loading, request} = useHttp()
    const token = useContext(TOKEN)
    const {state} = useLocation()

    useEffect(() => {
        
        if(state.track) {
            request(state.track, "GET", null, {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            })
            .then(res => {
                setAlbum(res);
                setTracks(res.items)
            })
        }


        
    }, []);

    console.log(state);
    

  return (
    <div>
        <img src={state.img} alt="" />
    </div>
  )
}

export default Playlist