import style from '../style/Playlist.module.css';
import clock_img from '../images/playlist_images/time-regular-24.png';
import Playlist_track from '../Components/Playlist_track';
import { useEffect, useState } from 'react';

const MusicTable = ({tracks}) => {


    return (
        <div className={style.tableContainer}>
            <table className={style.table}>
                <thead className={style.thead}>
                    <tr className={style.tdBox}>
                        <th className={style.thHash}>#</th>
                        <th className={`${style.th} ${style.albumth}`}>Альбом</th>
                        <th className={`${style.th} ${style.datath}`}>Дата добавления</th>
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
