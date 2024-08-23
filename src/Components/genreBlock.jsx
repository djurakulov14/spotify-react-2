import { Link } from "react-router-dom";
import "/src/App.css";

function GenreBlock({genre}) {
    

    return (
        <Link to={'/playlist/category=' + genre.id} key={genre.id} className=" h-[150px] w-[30%] bg-[#1E3264] overflow-hidden relative flex rounded-xl">
            <h1 className=" m-[15px] text-2xl w-[50%]">{genre.name}</h1>
            <img className="rounded-xl w-[40%] rotate-[25deg] absolute right-[-25px] bottom-[-15px]" src={genre.icons[0].url} alt={genre.name} />
        </Link>
    )
}

export default GenreBlock
