import "/src/App.css";
import React, { useContext, useState } from "react";
import All from "/src/Components/genreBlock";
import { useEffect } from "react";
import TOKEN from "../Contexts/token";
import { useHttp } from "../Hooks/http.hook";

const Search = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('')
  const { loading, error, request } = useHttp();
  const token = useContext(TOKEN);


  const CLIENT_ID = "df740335f0be409ea3fc389380ca2f77";
  const REDIRECT_URI = "http://localhost:5174/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  useEffect(() => {
    let token = localStorage.getItem("token");
    let hash = location.hash;

    if (!token) {
      if (hash) {
        token = hash.split("=")[1].split("&")[0];
        localStorage.setItem("token", token);
        location.assign("/");
      }
    }
    //   console.log(location.hash.split("=")[1].split('&')[0]);
  }, []);

  useEffect(() => {
    let token = localStorage.getItem("token");

    fetch("https://api.spotify.com/v1/browse/categories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.categories.items);
      });

      request(
        `https://api.spotify.com/v1/search?q=${query}&type=track&include_external=audio`,
        "GET",
        null,
        {
            Authorization: `Bearer ${token}`,
        }
    ).then((res) => {
        setMyPlayslits(res.items);
        console.log(res);
        
    });
  }, []);

  return (
    <>
      <div className="containerr">
        <div className="fixedd">
          <div className="search_block">
            <div className="left">
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

          <div className="block">
            {data.length > 0 ? (
              data.map((genre) => <All key={genre.id} genre={genre} />)
            ) : (
              <p>Загрузка...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
