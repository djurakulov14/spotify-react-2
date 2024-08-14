import React from "react"
import "/src/App.css"

function Genres({ genre, toggleShowMore, More }) {
    
    return (
      <>
        <div className="top">
            <h1>{genre.genre}</h1>
             <span onClick={toggleShowMore}> 
             {More ? "CLOSE" : "SEE ALL"}</span> 
        </div>
      </>
    )
  }
  
  export default Genres