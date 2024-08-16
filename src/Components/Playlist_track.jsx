import style from '../style/Playlist.module.css';

export default function Playlist_track({ track, num }) {
    return (
        <tr className={style.tr}>

            <td className={style.trackNumber}>{num + 1}</td>

            <td className={style.trackTitle}>

                <div className={style.trackName}>

                    <img src={track.cover} alt={track.title} className={style.albumCover} />

                    <div>
                        <span className={style.trackTitleTxt}>{track.title}</span> <br />
                        {track.explicit && <span className={style.explicit}>E</span>}
                        <span className={style.artistTxt}>{track.artist}</span>
                    </div>

                </div>
            </td>

            <td className={style.trackAlbum}>{track.album}</td>
            <td className={style.trackTime}>{track.added}</td>
            <td className={style.trackDuration}>{track.duration}</td>
        </tr>
    );
}
