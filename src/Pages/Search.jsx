import Card  from '../Components/Card.jsx'
import React from 'react'

const Search = () => {
    const arr = [
        {
            id: 1,
            name: "Музыка",
            img: "https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb",
            color: "rgb(220, 20, 140)"
        },
        {
            id: 2,
            name: "Подкасты",
            img: "https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa",
            color: "rgb(0, 100, 80)"
        },
        {
            id: 3,
            name: "Мероприятия",
            img: "https://concerts.spotifycdn.com/images/live-events_category-image.jpg",
            color: "rgb(132, 0, 231)"
        },
        {
            id: 4,
            name: "Для тебя",
            img: "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
            color: "rgb(30, 50, 100)"
        },
        {
            id: 5,
            name: "Новые релизы",
            img: "https://i.scdn.co/image/ab67fb8200005caf194fec0fdc197fb9e4fe8e64",
            color: "rgb(225, 51, 0)"
        },
        {
            id: 6,
            name: "Поп",
            img: "https://i.scdn.co/image/ab67fb8200005caf66d545e6a69d0bfe8bd1e825",
            color: "rgb(71, 125, 149)"
        },
        {
            id: 7,
            name: "Хип-хоп",
            img: "https://i.scdn.co/image/ab67fb8200005caf5f3752b3234e724f9cd6056f",
            color: "rgb(71, 125, 149)"
        },
        {
            id: 8,
            name: "Настроение",
            img: "https://i.scdn.co/image/ab67fb8200005cafe542e9b59b1d2ae04b46b91c",
            color: "rgb(225, 17, 140)"
        },
        {
            id: 9,
            name: "Dance",
            img: "https://i.scdn.co/image/ab67fb8200005caf26ada793217994216c79dad8",
            color: "rgb(71, 125, 149)"
        },
        {
            id: 10,
            name: "Чарты для подкастов",
            img: "https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg",
            color: "rgb(13, 115, 236)"
        },
        {
            id: 11,
            name: "Образование",
            img: "https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7",
            color: "rgb(71, 125, 149)"
        },
        {
            id: 12,
            name: "Докумен-талистика",
            img: "https://i.scdn.co/image/ab6765630000ba8a2f514cde3ee9501e7ada4cf4",
            color: "rgb(80, 55, 80)"
        }
    ]
    return (
        <>
            <div className='search-layout ' draggable="false">
                <img src="../../Search_S.svg" alt="" />
                <input type="text" placeholder='Что хочешь включить?' />
            </div>
            <div className='absolute top-[80px] rounded-tr-xl rounded-tl-xl text-white p-[40px] right-[20%] w-[60%] h-full bg-gradient-to-b from-[#444444] to-[#121212] '>
                <h1 className='text-[30px] font-[600] py-[20px]'>Все остальное</h1>
                <div className="boxSearch">
                    {arr.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Search