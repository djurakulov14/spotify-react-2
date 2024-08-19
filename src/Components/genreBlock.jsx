import "/src/App.css";

function All({genre}) {
    console.log(genre);
    
    return (
        <div key={genre.id} className="box">
            <h1>{genre.genre}</h1>
            <img src={genre.img} alt={genre.genre} />
        </div>
    )
}

export default All
