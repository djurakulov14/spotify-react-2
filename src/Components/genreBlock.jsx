import "/src/App.css";

function All({genre}) {
    
    return (
        <div key={genre.id} className="box">
            <h1>{genre.name}</h1>
            <img src={genre.icons[0].url} alt={genre.name} />
        </div>
    )
}

export default All
