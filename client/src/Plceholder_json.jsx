import React, { useState } from "react";
import { useEffect } from "react";
const Family_card = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setdata(json);
      } catch (error) {
        console.log("fetching data error:", err);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      <div className="flex  flex-wrap justify-between items-center m-8 gap-24 ">
        {data.map((datas, index) => (
          <div className="w-72 h-36 bg-blue-400 rounded-2xl p-4 text-justify">
            <p className=" text-lg">
              <strong>name:</strong>
              {datas.name}
            </p>
            <p className=" text-lg">
              <strong>email:</strong>
              {datas.email}
            </p>
            <p className=" text-lg">
              <strong>city:</strong>
              {datas.address.city}
            </p>
          </div>
        ))}
      </div>
      ;
    </>
  );
};

export default Family_card;
