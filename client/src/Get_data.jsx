import React from "react";
import { useState } from "react";
import { useEffect } from "react";
const Get_data = () => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:3000/user");
        const data = await response.json();
        setuser(data);
      } catch (err) {
        console.log("data fetching error", err);
      }
    };
    fetchdata();
  }, []);
  return (
    <>
      <div>
        <div className="flex flex-wrap justify-between items-center gap-8">
          {user.map((users, index) => (
            <div
              key={index}
              className="bg-fuchsia-400 h-60 w-52 rounded-2xl shadow-2xl"
            >
              <p>{users.name}</p>
              <p>{users.email}</p>
              <p>{users.city}</p>
              <p>{users.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Get_data;
