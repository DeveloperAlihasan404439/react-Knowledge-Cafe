import React from "react";
import { BsBookmark } from 'react-icons/bs';
const Bloge = ({ bloge,hendelBookMark,hendelTimeBookMark }) => {
  const {
    cover,
    author_img,
    author,
    posted_date,
    title,
    reading_time,
    hashtags,
  } = bloge;
  
  return (
    <div className="border-2 border-gray-600 rounded-xl">
      <img src={cover} alt="" className="w-[100%] rounded-t-lg h-[300px]" />
      <div className="mt-4 flex justify-between p-4">
        <div className="flex gap-3">
            <img src={author_img} alt="" className="w-[50px] h-[50px] rounded-[50%]"/>
          <div>
            <h1 className="text-xl title-font">{author}</h1>
            <h1 className="text-sm title-font">{posted_date}</h1>
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
            <h1 className="text-xl title-font">{reading_time} min read</h1>
            <button onClick={()=>hendelBookMark(bloge)}><BsBookmark className="text-xl"></BsBookmark></button>
        </div>
      </div>
      <h1 className="title-font text-2xl title-font px-4 ">{title}</h1>
      <h1 className="text-xl title-font p-4">{hashtags[0]}  {hashtags[1]}</h1>
      <button onClick={()=>hendelTimeBookMark(reading_time)} className="cursor-pointer text-xl title-font text-blue-600 underline ml-4 mb-4">Mark as read</button>
    </div>
  );
};

export default Bloge;
