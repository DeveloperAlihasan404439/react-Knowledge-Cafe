import React, { useEffect, useState } from "react";
import Bloge from "../Bloge/Bloge";
import { addBookMark, getBookMark } from "../../utility/bookMake";

const Bloges = () => {
  const [bloges, setBloges] = useState([]);
  const [bookMark, setBookMark] = useState([]);
  const [bookTime, setBookTime] = useState(0);
  useEffect(() => {
    async function bloges() {
      const res = await fetch("data.json");
      const data = await res.json();
      setBloges(data);
    }
    bloges()
  }, []);
  useEffect(() => {
    if (bloges.length > 0) {
      const getData = getBookMark();
      const blogeLsData = [];
      for (const id of getData) {
        const localData = bloges.find((bloge) => bloge.id === id);
        blogeLsData.push(localData);
      }
      setBookMark(blogeLsData);
    }
  }, [bloges]);
  const hendelBookMark = (bloge) => {
    const newBolgeData = [...bookMark, bloge];
    setBookMark(newBolgeData);
    addBookMark(bloge.id);
  };
  const hendelTimeBookMark = (time) => {
    const newTimte = bookTime + time;
    setBookTime(newTimte)
  };
  return (
    <div className="w-11/12 mx-auto mt-4 md:flex justify-between gap-4">
      <div className="md:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 md:mb-0">
        {bloges.map((bloge) => (
          <Bloge
            key={bloge.id}
            bloge={bloge}
            hendelBookMark={hendelBookMark}
            hendelTimeBookMark={hendelTimeBookMark}
          ></Bloge>
        ))}
      </div>
      <div className="md:w-[25%]">
        <div className="bg-gray-300 p-4 rounded-xl">
          <h1 className="title-font text-xl mb-3 p-4 bg-white">
            Spent time on read : {bookTime} min
          </h1>
          <h1 className="title-font text-2xl mb-3">
            Book Mark Length : {bookMark?.length}
          </h1>
          {bookMark?.map((book, i) => (
            <div key={i}>
              <h1 className="title-font p-6 bg-white rounded-xl text-xl mb-3">
                {book.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bloges;
