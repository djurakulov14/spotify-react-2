import style from '../style/Playlist.module.css';

import play_img from '../images/playlist_images/play-regular-36.png';

import { useContext, useState } from 'react';
import currentTrack from '../Contexts/currentTrack';

export default function Playlist_track({ trackk, num }) {
    const [entered, setEntered] = useState(false);
    const [item, setItem] = useState(trackk.track)
    const { changeTrack } = useContext(currentTrack);

	const clickSong = () => {
		localStorage.setItem("lastTrack", JSON.stringify(item));
		let data = {
			isPlaying: true,
			track: item,
		};

		changeTrack(data);
        
	};
    
    return (

    <tr
            className={style.tr}
            onMouseEnter={() => setEntered(true)}
            onMouseLeave={() => setEntered(false)}
            onClick={() => clickSong()}
        >
            <td className={style.trackNumber}>
                {!entered ? num + 1 : <img className={style.trackPlay_icon} src={play_img} alt="Play Icon" />}
            </td>

            <td className={style.trackTitle}>

                <div className={style.trackName}>

                    <img src={item?.album.images[1]?.url} alt={item?.name} className={style.albumCover} />
                    <div className={style.textBox}>

                        <span className={style.trackTitleTxt}>{item?.name}</span> <br />
                        <div className={style.artist_E_box}>

                            {item?.explicit && <span className={style.explicit}>E</span>}
                            <span className={style.artistTxt}>{item?.artist}</span>

                        </div>

                    </div>
                </div>
            </td>

            <td className={style.trackAlbum}>{item?.album.name}</td>
            <td className={style.trackTime}>{trackk?.added_at.split('T')[0]}</td>
            <td className={style.trackDurationBox}>0:29</td>
        </tr>
    );
}
