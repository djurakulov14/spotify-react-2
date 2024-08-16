import React from 'react'

const RightAside = () => {
  return (
    <div className=' w-[20%] px-4 fixed h-screen  text-white right-0 top-0 z-10'>
        <div className='bg-[#121212] rounded-xl p-5 flex flex-col gap-5'>
            <h1 className=' font-bold text-xl'>Current track</h1>
            <img className=' rounded-xl' src="/playlistImg.jpg" alt="playlist" />
            <div className="info flex flex-col gap-2">
                <span className='font-bold text-2xl'> Track</span>
                <span className=' font-semibold text-[#A8A8A8]'> Artist</span>
            </div>
            <div className="info p-5 ">
                <div className="top">
                    <h1>Сведения</h1>
                    <span>Показать все</span>
                </div>
                <div className="details">
                    <div className="left">
                        <h1>Name</h1>
                        <p>Основной исполнитель</p>
                    </div>
                    <div className="right">
                        <button>Подписаться</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightAside