import React, { useState } from "react";
import { useEffect } from "react";
const Family_card = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("/data.json");
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
          <div className="w-60 h-36 bg-blue-400 rounded-2xl p-4 text-justify">
            <p className=" text-xl">
              <strong>name:</strong>
              {datas.name}
            </p>
            <p className=" text-xl">
              <strong>city:</strong>
              {datas.city}
            </p>
            <p className=" text-xl">
              <strong>state:</strong>
              {datas.state}
            </p>
          </div>
        ))}
      </div>
      ;
    </>
  );
};

export default Family_card;
