import React, { useContext, useEffect, useRef, useState } from "react";
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { TfiControlShuffle } from 'react-icons/tfi';
import { RiRepeat2Line } from 'react-icons/ri';
import { MdSkipPrevious } from 'react-icons/md';
import { MdSkipNext } from 'react-icons/md';
import { MdPauseCircle } from 'react-icons/md';
import { MdPlayCircle } from 'react-icons/md';
import { HiOutlineQueueList } from 'react-icons/hi2';
import { TbDevices2 } from 'react-icons/tb';
import { TbVolume } from 'react-icons/tb';
import { MdOpenInFull } from 'react-icons/md';


const Player = ({curTrack}) => {

    const [image, setImage] = useState(false)
    const [pause, setPause] = useState(false)
    const [currentTrack, setCurrentTrack] = useState({})
    const [like, setLike] = useState(currentTrack?.isLiked)

    useEffect(() => {
        setCurrentTrack(curTrack)    
        console.log( currentTrack);
    }, [curTrack])

    const nextTrack = () => {
        // if(trackId === 40) {
        //     setTrackId(1)
        // } else {
        //     setTrackId(trackId + 1)
        // }
    }

    const previousTrack = () => {
        // if(trackId === 1) {
        //     setTrackId(40)
        // } else {
        //     setTrackId(trackId - 1)
        // }
        // console.log('helo');
        
    }


    
    const handleSong = () => {
        setPause(!pause)
    }

    useEffect(() => {
        const audio = document.querySelector('audio')
        if(pause) {
            audio.play()
        } else {
            audio.pause()
        }

    }, [pause])

    // function width(e) {
    //     const {duration, currentTime} = e.srcElement
    //     const progresspercent = (currentTime / duration) * 100
    //     audioLength.style.width = `${progresspercent}%`
    //     let curr = Math.round(currentTime) <= 9 ? "0" + Math.round(currentTime) : Math.round(currentTime)
    //     currTime.innerHTML = "0:" + curr
    // }

    // function setProgress(e) {
    //     const width = this.clientWidth
    //     const clickX = e.offsetX
    //     const duration = audio.duration
    //     audio.currentTime = (clickX / width) * duration
    // }

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);
    const progressRef = useRef(null);
  
    useEffect(() => {
      // Обновление продолжительности трека при загрузке
      const audio = audioRef.current;
      const handleLoadedMetadata = () => setDuration(audio.duration);
  
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
  
      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }, []);

     // Обновление текущего времени трека и прогресс-бара
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Обработка изменения прогресса вручную
  const handleProgressChange = (e) => {
    const manualTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = manualTime;
    setCurrentTime(manualTime);
  };

    return ( 
        <div className="fixed overflow-hidden bottom-0 left-0 bg-[#181818] h-fit w-full flex justify-between items-center p-4 z-[1000] max-lg:p-3 max-[500px]:p-1 max-lg:bottom-24 max-lg:ml-5 max-lg:w-11/12 max-lg:rounded-3xl max-lg:h-24 max-[500px]:h-20">
            <div className="left flex gap-2 items-center max-lg:gap-1">
                {image ? <img src={currentTrack?.img} className="bigImg" onClick={() => setImage(!image)}/> : <img src={currentTrack?.img} className="w-20 rounded-xl max-lg:w-12 max-[500px]:w-10"  onClick={() => setImage(!image)}/>}           
                <div className="flex text-white flex-col">
                    <p className="whitespace-nowrap w-fit max-w-52 overflow-hidden max-lg:text-sm max-[500px]:text-xs max-lg:w-40 max-lg:overflow-hidden max-[500px]:w-36 max-[500px]:overflow-hidden max-sm:w-32  max-sm:overflow-hidden">{currentTrack.track?.name}</p>
                    <p className="text-gray-400 max-lg:text-sm max-[500px]:text-xs">{currentTrack?.track?.artists[0]?.name}</p>
                </div>
                {like ? <AiFillHeart color="#63CF6C" size={25} className="ml-6 max-lg:ml-2" onClick={() => setLike(!like)}/> : <AiOutlineHeart className="ml-6" color="white" size={25} onClick={() => setLike(!like)}/> }
            </div>
            <div className="mid flex flex-col items-center">
                <div className="top flex gap-2 items-center">
                    <TfiControlShuffle color="c4c4c4" size={30} className=" max-lg:hidden"/>
                    <MdSkipPrevious color="c4c4c4" size={35} className=" max-lg:hidden" onClick={nextTrack}/>

                    {pause ? <MdPauseCircle color="white" size={45} onClick={handleSong}/> : <MdPlayCircle color="white" size={45} onClick={handleSong}/> }
                    
                    <MdSkipNext color="c4c4c4" size={35} className=" max-lg:hidden"  onClick={previousTrack}/>
                    <RiRepeat2Line color="c4c4c4" size={30} className=" max-lg:hidden"/>
                </div>
                <div className="bot">
                    {/* <audio src={currentTrack.track?.preview_url}  controls className="max-lg:absolute max-lg:bottom-0 left-0 max-lg:w-full max-lg:h-4"/> */}
                    <audio
                        ref={audioRef}
                        src={currentTrack.track?.preview_url}
                        onTimeUpdate={handleTimeUpdate}
                    />

                    <div className="mt-4 flex justify-between items-center gap-8 text-white">
                        <span>{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            ref={progressRef}
                            value={(currentTime / duration) * 100 || 0}
                            onChange={handleProgressChange}
                            style={{
                                background: `linear-gradient(to right, #63CF6C ${(currentTime / duration) * 100}%, #fff 0%)`
                            }}
                            className="w-[500px] h-[5px] bg-gray-400 rounded-lg appearance-none"
                        />
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
            </div>
            <div className="right flex gap-2 items-center max-lg:hidden">
                <HiOutlineQueueList color="white" size={20}/>
                <TbDevices2 color="white" size={20}/>
                <TbVolume color="white" size={20}/>
                <input type="range" className="input2 w-full"  style={{width: "100px"}}/>
                <MdOpenInFull color="white" size={20}/>
            </div>
        </div>

    );
}

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };


export default Player; 