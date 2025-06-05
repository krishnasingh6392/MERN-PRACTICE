import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  console.log("params", params);
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
      .then((data) => data.json())
      .then((data) => setdata(data));
  }, []);
  //   if (data === null) return <p> loading</p>;
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default Post;
