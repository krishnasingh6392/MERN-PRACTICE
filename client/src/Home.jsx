import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setdata(data));
  }, []);

  return (
    <>
      <div className="bg-blue-200">
        {data.map((datas, index) => (
          <div key={index} className="p-2">
            <NavLink to={`/post/${datas.id}`} className=" text-blue-500">
              {datas.title}
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
