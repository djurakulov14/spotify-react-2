import "/src/App.css";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import TOKEN from "../Contexts/token";
import { useHttp } from "../Hooks/http.hook";
import GenreBlock from "../Components/genreBlock";
import SearchResult from "../Components/SearchResult";
import RecentSearches from "../Components/RecentSearches";
import searchContext from "../Contexts/searchContext";
import { useDebounce } from "@uidotdev/usehooks";

const Search = () => {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState('')
	const { loading, error, request } = useHttp();
	const token = useContext(TOKEN);
	const { searchText } = useContext(searchContext);
	const [tracks, setTracks] = useState([]);




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
  }, []);

  const makeRequest = useDebounce(() => {
	if (searchText.length > 0) {
		request(
			`https://api.spotify.com/v1/search?q=${searchText}&type=track%2Cartist&market=uz&limit=5&offset=5`,
			"GET",
			null,
			{
				Authorization: `Bearer ${token}`,
			}
		).then((res) => {
			setTracks(res.tracks.items);
		});
	}
}, 400);

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
  }, []);

  useEffect(() => makeRequest, [searchText])

  return (
    <>
      	<div className="m-auto mb-[100px] rounded-xl mt-[80px] min-h-screen text-white p-[40px] w-[60%] bg-gradient-to-b from-[#444444] to-[#121212] max-2xl:w-[80%] max-2xl:ml-[30%] max-md:w-full max-md:ml-0 max-lg:p-2">
				{searchText ? (
					<SearchResult tracks={tracks} />
				) : (
					<RecentSearches />
				)}
			<section className=" flex gap-7 flex-wrap max-lg:gap-4 max-sm:gap-2">
				{
					data.map(item => <GenreBlock genre={item} key={item.id} />)
				}
			</section>
	  	</div>
    </>
  );
};

export default Search;
