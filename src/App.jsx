import "./App.css";
import All from "./Components/genreBlock";

function App() {
  const arrey = [
    {
      id: 1,
      img: "/album/ChillMix.png",
      genre: "Музыка",
    },
    {
      id: 2,
      img: "/album/IndieMix.png",
      genre: "Подкасты",
    },
    {
      id: 3,
      img: "/album/PheelzMix.png",
      genre: "Мероприятие",
    },
    {
      id: 4,
      img: "/album/PopMix.png",
      genre: "Для тебя",
    },
    {
      id: 5,
      img: "/album/ChillMix.png",
      genre: "Новые релизы",
    },
    {
      id: 6,
      img: "/album/IndieMix.png",
      genre: "Поп",
    },
    {
      id: 7,
      img: "/album/PheelzMix.png",
      genre: "Хип-Хоп",
    },
    {
      id: 8,
      img: "/album/PopMix.png",
      genre: "Настроение",
    },
    {
      id: 9,
      img: "/album/ChillMix.png",
      genre: "Dance",
    },
    {
      id: 10,
      img: "/album/IndieMix.png",
      genre: "Чарты подкастов",
    },
    {
      id: 11,
      img: "/album/ChillMix.png",
      genre: "Музыка",
    },
    {
      id: 12,
      img: "/album/IndieMix.png",
      genre: "Подкасты",
    },
    {
      id: 13,
      img: "/album/PheelzMix.png",
      genre: "Мероприятие",
    },
    {
      id: 14,
      img: "/album/PopMix.png",
      genre: "Для тебя",
    },
    {
      id: 15,
      img: "/album/ChillMix.png",
      genre: "Новые релизы",
    },
    {
      id: 16,
      img: "/album/IndieMix.png",
      genre: "Поп",
    },
    {
      id: 17,
      img: "/album/PheelzMix.png",
      genre: "Хип-Хоп",
    },
    {
      id: 18,
      img: "/album/PopMix.png",
      genre: "Настроение",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="fixed">
          <div className="search_block">
            <div className="left">
              <div className="arrow">
                <img src="/icon/left.png" alt="" />
                <img src="/icon/right.png" alt="" />
              </div>
              <form>
                <input type="text" placeholder="Что хочешь включить ?" />
                <img src="/icon/search.png" alt="" />
              </form>
            </div>
            <div className="right">
              <img src="/icon/user.png" alt="" />
            </div>
          </div>
        </div>

        <div className="all_block">
          <h1>Все остальное</h1>

          <div className="block">
            {arrey.map((genre) => (
              <All genre={genre} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
