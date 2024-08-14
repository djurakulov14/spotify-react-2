import React from "react"
import "/src/App.css"

function Playlist({ dat }) {

    return (
      <>
        <div className="box">
            <img src={dat.img} alt={dat.title} />
            <h1>{dat.title}</h1>
            <p>{dat.txt}</p>
        </div>
      </>
    )
  }
  
  export default Playlist