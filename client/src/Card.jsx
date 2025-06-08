import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {data.map((datas, index) => {
        if (!datas.urlToImage) {
          return null;
        } else {
          return (
            <div
              key={index}
              className="bg-gray-100 h-[500px] w-96 rounded-2xl mt-16"
            >
              <img src={datas.urlToImage} className="h-48 w-full" alt="" />
              <div className="h-48">
                <h1
                  onClick={() => window.open(datas.url)}
                  className="text-md p-2 text-blue-600 hover:cursor-pointer hover:underline"
                >
                  {datas.title}
                </h1>
                <p className="text-sm p-2 ">{datas.description}</p>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => window.open(datas.url)}
                  className="bg-sky-300 px-2  w-full py-1 mt-8 hover:cursor-pointer"
                >
                  Read more
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
