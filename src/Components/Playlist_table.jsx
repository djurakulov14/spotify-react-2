import style from '../style/Playlist.module.css';
import clock_img from '../images/playlist_images/time-regular-24.png';
import Playlist_track from '../Components/Playlist_track';

export const tracks = [
    {
        id: 1,
        title: 'Starboy',
        artist: 'The Weeknd, Daft Punk',
        album: 'Starboy',
        cover: 'https://th.bing.com/th/id/OIP.8oFWLCxL0VKupQ7BhmjINQAAAA?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        added: '11 минут назад',
        duration: '3:50',
        explicit: true
    },
    {
        id: 2,
        title: 'Star Shopping',
        artist: 'Lil Peep',
        album: 'Star Shopping',
        cover: 'https://th.bing.com/th/id/OIP.CNrLGUuwcW9pMm1x_V8jdAHaF5?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        added: '9 минут назад',
        duration: '2:22',
        explicit: true
    },
    {
        id: 1,
        title: 'Starboy',
        artist: 'The Weeknd, Daft Punk',
        album: 'Starboy',
        cover: 'https://th.bing.com/th/id/OIP.8oFWLCxL0VKupQ7BhmjINQAAAA?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        added: '11 минут назад',
        duration: '3:50',
        explicit: true
    },
    {
        id: 2,
        title: 'Star Shopping',
        artist: 'Lil Peep',
        album: 'Star Shopping',
        cover: 'https://th.bing.com/th/id/OIP.CNrLGUuwcW9pMm1x_V8jdAHaF5?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        added: '9 минут назад',
        duration: '2:22',
        explicit: true
    },
    {
        id: 1,
        title: 'Starboy',
        artist: 'The Weeknd, Daft Punk',
        album: 'Starboy',
        cover: 'https://th.bing.com/th/id/OIP.8oFWLCxL0VKupQ7BhmjINQAAAA?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        added: '11 минут назад',
        duration: '3:50',
        explicit: true
    },
    {
        id: 2,
        title: 'Star Shopping',
        artist: 'Lil Peep',
        album: 'Star Shopping',
        cover: 'https://th.bing.com/th/id/OIP.CNrLGUuwcW9pMm1x_V8jdAHaF5?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        added: '9 минут назад',
        duration: '2:22',
        explicit: true
    },
    {
        id: 1,
        title: 'Starboy',
        artist: 'The Weeknd, Daft Punk',
        album: 'Starboy',
        cover: 'https://th.bing.com/th/id/OIP.8oFWLCxL0VKupQ7BhmjINQAAAA?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        added: '11 минут назад',
        duration: '3:50',
        explicit: true
    },
    {
        id: 2,
        title: 'Star Shopping',
        artist: 'Lil Peep',
        album: 'Star Shopping',
        cover: 'https://th.bing.com/th/id/OIP.CNrLGUuwcW9pMm1x_V8jdAHaF5?w=219&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        added: '9 минут назад',
        duration: '2:22',
        explicit: true
    },
    
];

const MusicTable = () => {
    return (
        <div className={style.tableContainer}>
            <table className={style.table}>
                <thead className={style.thead}>
                    <tr className={style.tdBox}>
                        <th className={style.th}>#</th>
                        <th className={style.th}>Название</th>
                        <th className={style.th}>Альбом</th>
                        <th className={style.th}>Дата добавления</th>
                        <th className={style.th}><img className={style.clock_img} src={clock_img} alt="Clock icon" /></th>
                    </tr>
                </thead>
                <tbody className={style.trBox}>
                    {tracks.map((track, index) => (
                        <Playlist_track track={track} num={index} key={track.id} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MusicTable;
