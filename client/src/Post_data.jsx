import React from "react";
import axios from "axios";
import { useState } from "react";

const Post_data = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
  });
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", form);
      alert("registration successfull");
      setform({ name: "", email: "", city: "", phone: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-100">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-400 h-96 w-80 rounded-2xl shadow-2xl "
      >
        <div className="m-2">
          <label className="font-semibold text-xl text-slate-800">Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter the Name"
            className="bg-gray-50 w-full rounded-xl text-slate-700 pl-2 placeholder:text-md mt-2 "
          />
        </div>

        <div className="m-2">
          <label className="font-semibold text-xl text-slate-800">Email:</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter the Email"
            className="bg-gray-50 w-full rounded-xl text-slate-700 pl-2 placeholder:text-md mt-2 "
          />
        </div>

        <div className="m-2">
          <label className="font-semibold text-xl text-slate-800">City:</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="Enter the City"
            className="bg-gray-50 w-full rounded-xl text-slate-700 pl-2 placeholder:text-md mt-2"
          />
        </div>

        <div className="m-2">
          <label className="font-semibold text-xl text-slate-800">phone:</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="enter phone number"
            className="bg-gray-50 w-full rounded-xl text-slate-700 pl-2 placeholder:text-md mt-2"
          />
        </div>

        <div className="flex justify-center items-center ">
          <button className="bg-gray-50 px-4 py-1 w-full rounded-r-full rounded-l-full mx-8 mt-8 hover:cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post_data;
