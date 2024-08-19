import style from '../style/Playlist.module.css';

import play_img from '../images/playlist_images/play-regular-36.png';

import { useState } from 'react';

export default function Playlist_track({ track, num }) {
    const [entered, setEntered] = useState(false);

    return (
        <tr
            className={style.tr}
            onMouseEnter={() => setEntered(true)}
            onMouseLeave={() => setEntered(false)}
        >
            <td className={style.trackNumber}>
                {!entered ? num + 1 : <img className={style.trackPlay_icon} src={play_img} alt="Play Icon" />}
            </td>

            <td className={style.trackTitle}>

                <div className={style.trackName}>

                    <img src={track.cover} alt={track.title} className={style.albumCover} />
                    <div className={style.textBox}>

                        <span className={style.trackTitleTxt}>{track.title}</span> <br />
                        <div className={style.artist_E_box}>

                            {track.explicit && <span className={style.explicit}>E</span>}
                            <span className={style.artistTxt}>{track.artist}</span>

                        </div>

                    </div>
                </div>
            </td>

            <td className={style.trackAlbum}>{track.album}</td>
            <td className={style.trackTime}>{track.added}</td>
            <td className={style.trackDurationBox}>{track.duration}</td>
        </tr>
    );
}
