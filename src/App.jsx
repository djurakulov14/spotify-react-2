import { useState } from "react";
import "./App.css";
import Genres from "./Components/Genres";
import Playlist from "./Components/playlist";

function App() {
  const [More, setMore] = useState(false)
  const arrey = [
    {
      id: 1,
      genre: "Your top mixes",
      data: [
        {
          id: 1,
          img: "/album/ChillMix.png",
          title: "Chill Mix",
          txt: "Julia Wolf, Khalid, ayokay and more",
        },
        {
          id: 2,
          img: "/album/PopMix.png",
          title: "Pop Mix",
          txt: "Hey Violet, VÉRITÉ, Timeflies and more",
        },
        {
          id: 3,
          img: "/album/PheelzMix.png",
          title: "Pheelz Mix",
          txt: "WizKid, Asake, Tiwa Savage and more",
        },
        {
          id: 4,
          img: "/album/IndieMix.png",
          title: "Indie Mix",
          txt: "Joywave, The xx, The Neighbourhood and...",
        },
        {
          id: 5,
          img: "/album/ChillMix.png",
          title: "Chill Mix",
          txt: "Julia Wolf, Khalid, ayokay and more",
        },
        {
          id: 6,
          img: "/album/PopMix.png",
          title: "Pop Mix",
          txt: "Hey Violet, VÉRITÉ, Timeflies and more",
        },
        {
          id: 7,
          img: "/album/PheelzMix.png",
          title: "Pheelz Mix",
          txt: "WizKid, Asake, Tiwa Savage and more",
        },
        {
          id: 8,
          img: "/album/IndieMix.png",
          title: "Indie Mix",
          txt: "Joywave, The xx, The Neighbourhood and...",
        },
      ],
    },
    {
      id: 2,
      genre: "Made for you",
      data: [
        {
          id: 1,
          img: "/album/ChillMix.png",
          title: "Chill Mix",
          txt: "Julia Wolf, Khalid, ayokay and more",
        },
        {
          id: 2,
          img: "/album/PopMix.png",
          title: "Pop Mix",
          txt: "Hey Violet, VÉRITÉ, Timeflies and more",
        },
        {
          id: 3,
          img: "/album/PheelzMix.png",
          title: "Pheelz Mix",
          txt: "WizKid, Asake, Tiwa Savage and more",
        },
        {
          id: 4,
          img: "/album/IndieMix.png",
          title: "Indie Mix",
          txt: "Joywave, The xx, The Neighbourhood and...",
        },
        {
          id: 5,
          img: "/album/ChillMix.png",
          title: "Chill Mix",
          txt: "Julia Wolf, Khalid, ayokay and more",
        },
        {
          id: 6,
          img: "/album/PopMix.png",
          title: "Pop Mix",
          txt: "Hey Violet, VÉRITÉ, Timeflies and more",
        },
        {
          id: 7,
          img: "/album/PheelzMix.png",
          title: "Pheelz Mix",
          txt: "WizKid, Asake, Tiwa Savage and more",
        },
        {
          id: 8,
          img: "/album/IndieMix.png",
          title: "Indie Mix",
          txt: "Joywave, The xx, The Neighbourhood and...",
        },
      ],
    },
    {
      id: 3,
      genre: "Recently played",
      data: [
        {
          id: 1,
          img: "/album/ChillMix.png",
          title: "Chill Mix",
          txt: "Julia Wolf, Khalid, ayokay and more",
        },
        {
          id: 2,
          img: "/album/PopMix.png",
          title: "Pop Mix",
          txt: "Hey Violet, VÉRITÉ, Timeflies and more",
        },
        {
          id: 3,
          img: "/album/PheelzMix.png",
          title: "Pheelz Mix",
          txt: "WizKid, Asake, Tiwa Savage and more",
        },
        {
          id: 4,
          img: "/album/IndieMix.png",
          title: "Indie Mix",
          txt: "Joywave, The xx, The Neighbourhood and...",
        },
        {
          id: 5,
          img: "/album/ChillMix.png",
          title: "Chill Mix",
          txt: "Julia Wolf, Khalid, ayokay and more",
        },
        {
          id: 6,
          img: "/album/PopMix.png",
          title: "Pop Mix",
          txt: "Hey Violet, VÉRITÉ, Timeflies and more",
        },
        {
          id: 7,
          img: "/album/PheelzMix.png",
          title: "Pheelz Mix",
          txt: "WizKid, Asake, Tiwa Savage and more",
        },
        {
          id: 8,
          img: "/album/IndieMix.png",
          title: "Indie Mix",
          txt: "Joywave, The xx, The Neighbourhood and...",
        },
      ],
    },
    {
      id: 4,
      genre: "Jump back in",
      data: [
        {
          id: 1,
          img: "/album/ChillMix.png",
          title: "Chill Mix",
          txt: "Julia Wolf, Khalid, ayokay and more",
        },
        {
          id: 2,
          img: "/album/PopMix.png",
          title: "Pop Mix",
          txt: "Hey Violet, VÉRITÉ, Timeflies and more",
        },
        {
          id: 3,
          img: "/album/PheelzMix.png",
          title: "Pheelz Mix",
          txt: "WizKid, Asake, Tiwa Savage and more",
        },
        {
          id: 4,
          img: "/album/IndieMix.png",
          title: "Indie Mix",
          txt: "Joywave, The xx, The Neighbourhood and...",
        },
        {
          id: 5,
          img: "/album/ChillMix.png",
          title: "Chill Mix",
          txt: "Julia Wolf, Khalid, ayokay and more",
        },
        {
          id: 6,
          img: "/album/PopMix.png",
          title: "Pop Mix",
          txt: "Hey Violet, VÉRITÉ, Timeflies and more",
        },
        {
          id: 7,
          img: "/album/PheelzMix.png",
          title: "Pheelz Mix",
          txt: "WizKid, Asake, Tiwa Savage and more",
        },
        {
          id: 8,
          img: "/album/IndieMix.png",
          title: "Indie Mix",
          txt: "Joywave, The xx, The Neighbourhood and...",
        },
      ],
    },
    {
      id: 5,
      genre: "Uniquely yours",
      data: [
        {
          id: 1,
          img: "/album/ChillMix.png",
          title: "Chill Mix",
          txt: "Julia Wolf, Khalid, ayokay and more",
        },
        {
          id: 2,
          img: "/album/PopMix.png",
          title: "Pop Mix",
          txt: "Hey Violet, VÉRITÉ, Timeflies and more",
        },
        {
          id: 3,
          img: "/album/PheelzMix.png",
          title: "Pheelz Mix",
          txt: "WizKid, Asake, Tiwa Savage and more",
        },
        {
          id: 4,
          img: "/album/IndieMix.png",
          title: "Indie Mix",
          txt: "Joywave, The xx, The Neighbourhood and...",
        },
        {
          id: 5,
          img: "/album/ChillMix.png",
          title: "Chill Mix",
          txt: "Julia Wolf, Khalid, ayokay and more",
        },
        {
          id: 6,
          img: "/album/PopMix.png",
          title: "Pop Mix",
          txt: "Hey Violet, VÉRITÉ, Timeflies and more",
        },
        {
          id: 7,
          img: "/album/PheelzMix.png",
          title: "Pheelz Mix",
          txt: "WizKid, Asake, Tiwa Savage and more",
        },
        {
          id: 8,
          img: "/album/IndieMix.png",
          title: "Indie Mix",
          txt: "Joywave, The xx, The Neighbourhood and...",
        },
      ],
    },
    {
      id: 6,
      genre: "Just the hits",
      data: [
        {
          id: 1,
          img: "/album/ChillMix.png",
          title: "Chill Mix",
          txt: "Julia Wolf, Khalid, ayokay and more",
        },
        {
          id: 2,
          img: "/album/PopMix.png",
          title: "Pop Mix",
          txt: "Hey Violet, VÉRITÉ, Timeflies and more",
        },
        {
          id: 3,
          img: "/album/PheelzMix.png",
          title: "Pheelz Mix",
          txt: "WizKid, Asake, Tiwa Savage and more",
        },
        {
          id: 4,
          img: "/album/IndieMix.png",
          title: "Indie Mix",
          txt: "Joywave, The xx, The Neighbourhood and...",
        },
        {
          id: 5,
          img: "/album/ChillMix.png",
          title: "Chill Mix",
          txt: "Julia Wolf, Khalid, ayokay and more",
        },
        {
          id: 6,
          img: "/album/PopMix.png",
          title: "Pop Mix",
          txt: "Hey Violet, VÉRITÉ, Timeflies and more",
        },
        {
          id: 7,
          img: "/album/PheelzMix.png",
          title: "Pheelz Mix",
          txt: "WizKid, Asake, Tiwa Savage and more",
        },
        {
          id: 8,
          img: "/album/IndieMix.png",
          title: "Indie Mix",
          txt: "Joywave, The xx, The Neighbourhood and...",
        },
      ],
    },
  ];

  const toggleShowMore = () => {
    setMore(More => !More);
  };

  return (
    <>
      <div className="container">
        <div className="album_block">
          <div className="generList">
              {
                arrey.map(genre => (
                  <div key={genre.id} className="genreSection">
                    <Genres key={genre.id} genre={genre} toggleShowMore={toggleShowMore} More={More}/>
                      <div className="albumMix">
                        {genre.data.slice(0, More ? 8 : 4).map(dat => (
                        <Playlist key={dat.id} dat={dat} />
                        ))}
                      </div>
                  </div>
                ))    
              }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
