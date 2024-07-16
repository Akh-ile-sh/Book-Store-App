import React, { useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = { title, author, publishedYear: year };
    setLoading(true);
    axios
      .post("http://localhost:3000/api/v1/books/createBook", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("data" + data);
        setLoading(false);
        navigate("/");
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <div className="text-xl mr-4 text-gray-500">Title</div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2"
          />
        </div>
        <div className="my-4">
          <div className="text-xl mr-4 text-gray-500">Author</div>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2"
          />
        </div>
        <div className="my-4">
          <div className="text-xl mr-4 text-gray-500">Year</div>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSubmit}>
          save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
