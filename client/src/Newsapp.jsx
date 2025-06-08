import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const Newsapp = () => {
  const [search, setsearch] = useState(null);
  const [newsdata, setnewsdata] = useState([]);
  const API_KEY = "20be565c4f7a435ba924dacd7e0fd516";

  const getdata = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsondata = await response.json();
    console.log(jsondata.articles);
    setnewsdata(jsondata.articles);
  };
  useEffect(() => {
    getdata();
  }, []);
  const handleInput = (e) => {
    console.log(e.target.value);
    setsearch(e.target.value);
  };
  const sportsbtnClick = (value) => {
    setsearch(value);
  };
  const healthbtnClick = (value) => {
    setsearch(value);
  };
  const moviesbtnClick = (value) => {
    setsearch(value);
  };
  const entertainmentbtnClick = (value) => {
    setsearch(value);
  };
  const politicsbtnClick = (value) => {
    setsearch(value);
  };
  useEffect(() => {
    if (search) {
      getdata();
    }
  }, [search]);

  return (
    <>
      <nav className="bg-sky-300 flex justify-between items-center gap-8 py-8 px-8">
        <h1 className="font-semibold text-3xl">Trendy News</h1>
        <div className="flex justify-center items-center gap-2 text-xl text-slate-900">
          <div>All news</div>
          <div>Trending</div>
        </div>
        <div className="flex justify-center gap-2">
          <input
            onChange={handleInput}
            type="text"
            placeholder="Search News"
            className="bg-white pl-2"
          />
          <button
            onClick={getdata}
            className="bg-blue-500 px-4 py-1 hover:cursor-pointer text-white"
          >
            Search
          </button>
        </div>
      </nav>

      <div className="flex justify-center items-center gap-8 mt-8 ">
        <button
          className="bg-red-400 text-xl px-4 py-2 text-gray-50 rounded-r-full rounded-l-full hover:cursor-pointer "
          onClick={() => sportsbtnClick("sports")}
        >
          Sports
        </button>
        <button
          onClick={() => politicsbtnClick("politics")}
          className="bg-red-400 text-xl px-4 py-2 text-gray-50 rounded-r-full rounded-l-full hover:cursor-pointer "
        >
          Politics
        </button>
        <button
          onClick={() => entertainmentbtnClick("entertainment")}
          className="bg-red-400 text-xl px-4 py-2 text-gray-50 rounded-r-full rounded-l-full hover:cursor-pointer "
        >
          Entertainment
        </button>
        <button
          onClick={() => healthbtnClick("health")}
          className="bg-red-400 text-xl px-4 py-2 text-gray-50 rounded-r-full rounded-l-full hover:cursor-pointer "
        >
          Health
        </button>
        <button
          onClick={() => moviesbtnClick("movies")}
          className="bg-red-400 text-xl px-4 py-2 text-gray-50 rounded-r-full rounded-l-full hover:cursor-pointer "
        >
          Movies
        </button>
      </div>
      <div>{newsdata ? <Card data={newsdata} /> : null}</div>
    </>
  );
};

export default Newsapp;
