import style from '../style/Profile.module.css';
import Profile_pictureBlock from '../Components/Profile_pictureBlock';
import PlaylistBlock from '../Components/playlistBlock';
import { useEffect, useState } from 'react';

function Profile() {
    const [profileImg, setProfileImg] = useState(null);
    const [userName, setUserName] = useState('Loading');
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchSpotifyProfileData = async () => {
            const token = localStorage.getItem('token');

            try {
                // Запрос профиля пользователя
                const profileResponse = await fetch('https://api.spotify.com/v1/me', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (profileResponse.ok) {
                    const profileData = await profileResponse.json();
                    const profileImageUrl = profileData.images[1]?.url;
                    const user_name = profileData.display_name;
                    setProfileImg(profileImageUrl);
                    setUserName(user_name);
                } else {
                    console.error('Failed to fetch profile data:', profileResponse.statusText);
                }

                // Запрос плейлистов пользователя
                const playlistsResponse = await fetch('https://api.spotify.com/v1/me/playlists', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (playlistsResponse.ok) {
                    const playlistsData = await playlistsResponse.json();
                    setPlaylists(playlistsData.items); 
                    
                } else {
                    console.error('Failed to fetch playlists:', playlistsResponse.statusText);
                }
            } catch (error) {
                console.error('Error fetching Spotify data:', error);
            }
        };

        fetchSpotifyProfileData();
    }, []);

    return (
        <div className={style.mainBlock}>

            <div className={style.topBlock}>

                <div className={style.profile_infoDiv}>

                    <Profile_pictureBlock coverUrl={profileImg} />

                    <div className={style.profile_txtDiv}>

                        <span className={style.profileTxt}>Профиль</span>
                        <span className={style.userName_txt}>{userName}</span>
                        <span className={style.playlistsTxt}>
                            {playlists.length} открыты{playlists.length > 0 ?'х' : 'й'} плейлист{playlists.length !== 1 ? 'а' : ''}
                        </span>

                    </div>

                </div>
            </div>

            <div className={style.dotesBox}>

                <button className={style.dotesButton}></button>

                 <span className={style.playlistsBox_txt}>Открытые плейлисты</span>
            </div>


            <div className={style.playlistsBox}>
                
                {playlists.map((playlist) => (
                    <PlaylistBlock key={playlist.id} playlist={playlist} />
                ))}
            </div>
        </div>
    );
}

export default Profile;
