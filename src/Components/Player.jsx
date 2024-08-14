import React, { useContext, useEffect, useState } from "react";
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


const Player = ({setTracks, tracks}) => {

    const [image, setImage] = useState(false)
    const [pause, setPause] = useState(false)
    const [trackId, setTrackId] = useState(1)
    const [currentTrack, setCurrentTrack] = useState(tracks[trackId])
    const [like, setLike] = useState(currentTrack?.isLiked)

    useEffect(() => {
        setCurrentTrack(tracks.filter(item => item.id == Number(trackId))[0])        
    }, [tracks])

    const nextTrack = () => {
        if(trackId === 40) {
            setTrackId(1)
        } else {
            setTrackId(trackId + 1)
        }
    }

    const previousTrack = () => {
        if(trackId === 1) {
            setTrackId(40)
        } else {
            setTrackId(trackId - 1)
        }
        console.log('helo');
        
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


    return ( 
        <div className="fixed overflow-hidden bottom-0 left-0 bg-[#181818] h-fit w-full flex justify-between items-center p-5 z-[1000] max-lg:p-3 max-[500px]:p-1 max-lg:bottom-24 max-lg:ml-5 max-lg:w-11/12 max-lg:rounded-3xl max-lg:h-24 max-[500px]:h-20">
            <div className="left flex gap-2 items-center max-lg:gap-1 w-fit">
                {image ? <img src={currentTrack?.img} className="bigImg" onClick={() => setImage(!image)}/> : <img src={currentTrack?.img} className="w-20 rounded-xl max-lg:w-12 max-[500px]:w-10"  onClick={() => setImage(!image)}/>}           
                <div className="flex text-white flex-col">
                    <p className="whitespace-nowrap w-56 overflow-hidden max-lg:text-sm max-[500px]:text-xs max-lg:w-40 max-lg:overflow-hidden max-[500px]:w-36 max-[500px]:overflow-hidden max-sm:w-32  max-sm:overflow-hidden">{currentTrack?.title}</p>
                    <p className="text-gray-400 max-lg:text-sm max-[500px]:text-xs">{currentTrack?.artists}</p>
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
                    <audio src={currentTrack?.url}  controls className="max-lg:absolute max-lg:bottom-0 left-0 max-lg:w-full max-lg:h-4"/>
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
export default Player; 