import style from '../style/Playlist.module.css'
import note_img from '../images/playlist_images/music-regular-72.png'
import pencil_img from '../images/playlist_images/pencil-regular-72.png'
import { useState } from 'react'

export default function Playlist_coverBlock(img) {

    const [hideBlock, setHideBlok] = useState(false)

    return (

        <div  style={img ? { backgroundImage: `url(${img.img})` } : {}} className={style.coverBlock} onMouseEnter={() => {setHideBlok(true)}} onMouseLeave={() => {setHideBlok(false)}}>

            <img className={!hideBlock && !img ? style.coverBlock_img: style.hideElement } src={note_img} alt="src_img" />

            <div className={hideBlock ? style.coverBlock_imgDiv : style.hideElement}>

              <img className={style.coverBlock_img} src={pencil_img} alt="src_img" />

              <span>Выбрать фото</span>

            </div>


        </div>

    )

    
}