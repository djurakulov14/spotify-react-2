
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
import { useLocation } from 'react-router-dom';

const Playlist = () => {
    const [tracks, setTracks] = useState([]);
    const [album, setAlbum] = useState(null);
    const {error, loading, request} = useHttp()
    const token = useContext(TOKEN)
    const {state} = useLocation()
    const location = useLocation()
    
    const id = location.pathname.split('=')[1]
    
    
    useEffect(() => {
        
        
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
    }, []);


    if(loading) {
        return <Loading/>
    }
    if(error) {
        return <span>ERROR</span>
    }
    


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const accessToken = localStorage.getItem('token');

    //         try {
    //             const playlistsResponse = await fetch('https://api.spotify.com/v1/me/playlists', {
    //                 headers: {
    //                     Authorization: `Bearer ${accessToken}`,
    //                 },
    //             });

    //             if (playlistsResponse.ok) {
    //                 const playlistsData = await playlistsResponse.json();
    //                 const firstPlaylist = playlistsData.items[0];

    //                 if (firstPlaylist) {
    //                     setPlaylistId(firstPlaylist.id);
    //                     setPlaylistName(firstPlaylist.name);
    //                     setCoverUrl(firstPlaylist.images[0]?.url);

    //                     // Fetch playlist details
    //                     const playlistDetailsResponse = await fetch(`https://api.spotify.com/v1/playlists/${firstPlaylist.id}`, {
    //                         headers: {
    //                             Authorization: `Bearer ${accessToken}`,
    //                         },
    //                     });

    //                     if (playlistDetailsResponse.ok) {
    //                         const playlistDetails = await playlistDetailsResponse.json();
    //                         setPlaylistName(playlistDetails.name);
    //                         setCoverUrl(playlistDetails.images[0]?.url);
    //                         setSongsNumber(playlistDetails.tracks.total);

    //                         const tracksResponse = await fetch(playlistDetails.tracks.href, {
    //                             headers: {
    //                                 Authorization: `Bearer ${accessToken}`,
    //                             },
    //                         });

    //                         if (tracksResponse.ok) {
    //                             const tracksData = await tracksResponse.json();
    //                             const totalDurationMs = tracksData.items.reduce((acc, item) => acc + item.track.duration_ms, 0);
    //                             const totalDurationMinutes = Math.floor(totalDurationMs / 60000);
    //                             const totalDurationSeconds = Math.floor((totalDurationMs % 60000) / 1000);
    //                             setSongsDuration(`${totalDurationMinutes}:${totalDurationSeconds.toString().padStart(2, '0')}`);
    //                         } else {
    //                             console.error('Failed to fetch tracks:', tracksResponse.statusText);
    //                         }
    //                     } else {
    //                         console.error('Failed to fetch playlist details:', playlistDetailsResponse.statusText);
    //                     }
    //                 }
    //             } else {
    //                 console.error('Failed to fetch playlists:', playlistsResponse.statusText);
    //             }

    //             const userProfileResponse = await fetch('https://api.spotify.com/v1/me', {
    //                 headers: {
    //                     Authorization: `Bearer ${accessToken}`,
    //                 },
    //             });

    //             if (userProfileResponse.ok) {
    //                 const userProfile = await userProfileResponse.json();
    //                 setUserName(userProfile.display_name);
    //             } else {
    //                 console.error('Failed to fetch user profile:', userProfileResponse.statusText);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <>
            <div className={style.mainBlock}>
                <div className={style.topBox}>
                    <div className={style.topBox2}>
                        <CoverBlock coverUrl={album?.images[0].url} /> 
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


