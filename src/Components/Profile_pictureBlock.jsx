
import style from '../style/Profile.module.css';
import user_img from '../images/playlist_images/profile_images/user-regular-72.png';
import pencil_img from '../images/playlist_images/pencil-regular-72.png';
import { useState, useEffect } from 'react';

export default function CoverBlock({ coverUrl }) {
    const [hideBlock, setHideBlock] = useState(false);
    const [img, setImg] = useState(coverUrl);

    

    useEffect(() => {
        setImg(coverUrl);
        console.log(coverUrl);
        
    }, [coverUrl]);


    return (
        <div
            style={img ? { backgroundImage: `url(${img})` } : {}}
            className={style.coverBlock}
            onMouseEnter={() => setHideBlock(true)}
            onMouseLeave={() => setHideBlock(false)}
        >
            <img
                className={!hideBlock && !img ? style.coverBlock_img : style.hideElement}
                src={user_img}
                alt="Cover Placeholder"
            />
            <div className={hideBlock ? style.coverBlock_imgDiv : style.hideElement}>
                <img className={style.coverBlock_img} src={pencil_img} alt="Edit Icon" />
                <span>Выбрать фото</span>
            </div>
        </div>
    );
}
