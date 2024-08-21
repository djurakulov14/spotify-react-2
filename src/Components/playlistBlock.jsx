import style from '../style/Profile.module.css';
import play_icon from '../images/playlist_images/play-regular-36.png'

function PlaylistBlock({ playlist }) {

    const imageUrl = playlist.images[0]?.url || 'fallback-image-url.png';

    return (
        <div className={style.playlistBlock}>
            <div className={style.playlistMainblock}>
                <img className={style.playlistImg} src={imageUrl} alt={playlist.name} />
                <button className={style.playButton}>
                    <img className={style.play_icon} src={play_icon} alt="img_src"  />
                </button>
                <span className={style.playlistTxt}>{playlist.name}</span>
                <span className={style.playlist_userName}>{playlist.owner.display_name}</span>
            </div>
        </div>
    );
}

export default PlaylistBlock;
