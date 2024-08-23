import React, { useContext, useState } from 'react'
import currentTrack from '../Contexts/currentTrack'

const RightAside = () => {

    const {track, changeTrack} = useContext(currentTrack)
    const [local, setLocal] = useState(JSON.parse(localStorage.getItem('lastTrack')))    

    

    const img = track?.track?.album?.images[0]?.url || local?.album?.images[0]?.url ||  "https://i.scdn.co/image/ab67616d00001e020eb9240c0c5bbba4a0495587"
    const artist = track?.track?.album?.artists[0]?.name || local?.album?.artists[0]?.name

  return (
    <div className=' w-[20%] bg-black px-4 fixed h-[90%] text-white right-0 top-0 z-10'>
        <div className='bg-[#121212] rounded-xl p-5 flex flex-col gap-5'>
            <h1 className=' font-bold text-xl'>Current track</h1>
            <img className=' rounded-xl' src={img} alt="playlist" />
            <div className="info flex flex-col gap-2">
                <span className='font-bold text-2xl'>{track?.track.name || local?.name}</span>
                <span className=' font-semibold text-[#A8A8A8]'> {artist}</span>
            </div>
            <div className="info p-5 bg-[#1F1F1F] rounded-xl">
                <div className="top flex justify-between font-bold mb-3">
                    <h1>Сведения</h1>
                    <span>Показать все</span>
                </div>
                    {
                        track?.track?.artists?.map((item) => (
                            <>
                            <div className="details flex justify-between gap-2">
                                <div className="left">
                                    <h1 className=' text-xl'>{item.name}</h1>
                                    <p>Основной исполнитель</p>
                                </div>
                                <div className="right">
                                    <button className=' border-white border-2 rounded-full py-1 px-2'>Подписаться</button>
                                </div>
                            </div>  
                            </>
                        ))
                    }
            </div>
        </div>
    </div>
  )
}

export default RightAside