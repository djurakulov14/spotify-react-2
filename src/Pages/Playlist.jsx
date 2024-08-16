import style from '../style/Playlist.module.css'
import CoverBlock from '../Components/Playlist_coverBlock'
import Playlist_table from '../Components/Playlist_table'
import { tracks } from '../Components/Playlist_table'     
////////////////////////////////////////////////////////////////


import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../Hooks/http.hook';
import TOKEN from '../Contexts/token';
import { useLocation } from 'react-router-dom';
import '../App.css'

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
                "Authorization": Bearer ${token}
            })
            .then(res => {
                setAlbum(res);
                setTracks(res.items)
            })
        }

        console.log(tracks);
        console.log(album);
        console.log(error, loading, React);
        

        
    }, []);





////////////////////////////////////////////////////////////////////////моё
  const [playlistName, setPlaylistName] = useState('Плейлист N 1')  

  const [userName, setUserName] = useState('userName')

  const [songsNumber, setSongsNumber] = useState(0)

  const [songsDuration, setSongsDuration] = useState(0)

  const [mainAlbum, setMainAlbum] = useState(null)

  useEffect(() => {

    setSongsNumber(tracks.length)

    tracks.length > 0 ? setMainAlbum(tracks[0].cover) : null

  }, [])

  
    

  return (

    <>

    <div className={style.mainBlock}>

      <div className={style.topBox}>

        <CoverBlock img = {mainAlbum}/>

        <div className={style.titleBox}>

          <span className={style.playlistTxt}>Плейлист</span>

          <span className={style.title}>{playlistName}</span>

          <span className={style.songsInformationTxt}><b>{userName}</b> • {songsNumber} трека, {songsDuration} .</span>
        </div>

      </div>


      <Playlist_table/>

        

    </div>
    
    </>
  )
}

export default Playlist