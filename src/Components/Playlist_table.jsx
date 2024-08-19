import style from '../style/Playlist.module.css';
import clock_img from '../images/playlist_images/time-regular-24.png';
import Playlist_track from '../Components/Playlist_track';
import { useEffect, useState } from 'react';

const MusicTable = ({tracks}) => {


    //  useEffect(() => {
    //     const fetchPlaylists = async () => {
    //         const accessToken = localStorage.getItem('token');

    //         try {
    //             const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    //                 headers: {
    //                     Authorization: `Bearer ${accessToken}`,
    //                 },
    //             });

    //             if (response.ok) {
    //                 const data = await response.json();
    //                 const firstPlaylistId = data.items[0]?.id; 
    //                 setPlaylistId(firstPlaylistId); 
    //             } else {
    //                 console.error('Failed', response.statusText);
    //             }
    //         } catch (error) {
    //             console.error('Error', error);
    //         }
    //     };

    //     fetchPlaylists();
    // }, []);

    // useEffect(() => {
    //     const fetchTracks = async () => {
    //         if (!playlistId) return;

    //         const accessToken = localStorage.getItem('token');

    //         try {
    //             const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
    //                 headers: {
    //                     Authorization: `Bearer ${accessToken}`,
    //                 },
    //             });

    //             if (response.ok) {
    //                 const data = await response.json();
    //                 const fetchedTracks = data.items.map((item, index) => ({
    //                     id: index,
    //                     title: item.track.name,
    //                     artist: item.track.artists.map(artist => artist.name).join(', '),
    //                     album: item.track.album.name,
    //                     cover: item.track.album.images[0]?.url,
    //                     added: timeSince(new Date(item.added_at)),
    //                     duration: new Date(item.track.duration_ms).toISOString().substr(14, 5),
    //                     explicit: item.track.explicit,
    //                 }));
    //                 setTracks(fetchedTracks);
    //             } else {
    //                 console.error('Failed to fetch tracks:', response.statusText);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching tracks:', error);
    //         }
    //     };

    //     fetchTracks();
    // }, [playlistId]);

    const timeSince = (date) => {
        const now = new Date();
        const seconds = Math.floor((now - date) / 1000);
        let interval = Math.floor(seconds / 86400);

        if (interval >= 1) {
            return interval + " дней назад";
        }

        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            return Math.floor(interval) + " часов назад";
        }

        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            return Math.floor(interval) + " минут назад";
        }

        return "только что";
    };

    return (
        <div className={style.tableContainer}>
            <table className={style.table}>
                <thead className={style.thead}>
                    <tr className={style.tdBox}>
                        <th className={style.thHash}>#</th>
                        <th className={style.th}>Название</th>
                        <th className={style.th}>Альбом</th>
                        <th className={style.th}>Дата добавления</th>
                        <th className={style.th}>
                            <img className={style.clock_img} src={clock_img} alt="Clock icon" />
                        </th>
                    </tr>
                </thead>
                <tbody className={style.trBox}>
                    {tracks.map((track, index) => (
                        <Playlist_track trackk={track} num={index} key={track.id} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MusicTable;
