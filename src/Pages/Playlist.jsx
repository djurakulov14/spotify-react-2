
import style from '../style/Playlist.module.css';
import CoverBlock from '../Components/Playlist_coverBlock';
import Playlist_table from '../Components/Playlist_table';
import play_img from '../images/playlist_images/play-regular-36.png';   
import dotes_img from '../images/playlist_images/dots-horizontal-rounded-regular-36.png';
import list_img from '../images/playlist_images/list-ul-regular-36.png';
import { useContext, useEffect, useState } from 'react';
import TOKEN from '../Contexts/token';
import Loading from '../Components/Loading';
import { useHttp } from '../Hooks/http.hook';
import { useLocation, useNavigate } from 'react-router-dom';

const Playlist = () => {
    const [tracks, setTracks] = useState([]);
    const [album, setAlbum] = useState(null);
    const {error, loading, request} = useHttp()
    const token = useContext(TOKEN)
    const {state} = useLocation()
    const location = useLocation()
    
    
    const id = location.pathname.split('=')[1]
    
    
    console.log(id);
    
    useEffect(() => {

        if (location.pathname.includes('category')) {
            request(`https://api.spotify.com/v1/browse/categories/${id}/playlists`, "GET", null, {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            })
            .then(res => {
                setAlbum(res);
                setTracks(res.tracks.items)
                console.log(res);
            })
        } else{

            if(state?.track) {
                request(`https://api.spotify.com/v1/playlists/${id}`, "GET", null, {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                })
                .then(res => {
                    setAlbum(res);
                    setTracks(res.tracks.items)
                    console.log(res);
                })
            } else {
                request(`https://api.spotify.com/v1/playlists/${id}`, "GET", null, {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                })
                .then(res => {
                    setAlbum(res);
                    setTracks(res.tracks.items)
                    
                    console.log(res);
                    
                })
            }
        }
        
    }, [id]);


    if(loading) {
        return <Loading/>
    }
    if(error) {
        return <span>ERROR</span>
    }


    return (
        <>
            <div className={style.mainBlock}>
                <div className={style.topBox}>
                    <div className={style.topBox2}>
                        <CoverBlock coverUrl={album?.images[0]?.url} /> 
                        <div className={style.titleBox}>
                            <span className={style.playlistTxt}>Плейлист</span>
                            <span className={style.title}>{album?.name || 'Загрузка...'}</span>
                            <span className={style.songsInformationTxt}>
                                <b>{album?.owner.display_name || 'Загрузка...'}</b> • {tracks?.length} трека, {"songsDuration"}.
                            </span>
                        </div>
                    </div>
                </div>
                <div className={style.topMenu}>
                    <div className={style.topMenu2}>
                        <div className={style.play_dotes_box}>
                            <button className={style.playButton}>
                                <img className={style.play_img} src={play_img} alt="Play" />
                            </button>
                            <button className={style.dotesButton}>
                                <img className={style.dotes_img} src={dotes_img} alt="Options" />
                            </button>
                        </div>
                        <div className={style.listType_box}>
                            <span className={style.listTxt}>Список</span>
                            <img className={style.list_img} src={list_img} alt="List" />
                        </div>
                    </div>
                </div>
                <Playlist_table tracks={tracks} />
            </div>
        </>
    );
};

export default Playlist;


