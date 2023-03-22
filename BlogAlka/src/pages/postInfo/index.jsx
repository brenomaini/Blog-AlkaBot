import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function PostInfo() {
  let id = useParams();
  const [postInfo, setPostInfo] = useState([]);

  async function getPostInfo() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id.id}/comments`
    );
    const data = await response.json();
    setPostInfo(data);
  }
  const location = useLocation();
  const [locationStates, setLocationStates] = useState({ from: "", post: `` });

  useEffect(() => {
    setLocationStates(location.state);
    getPostInfo();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  gap-8 w-full p-20">
      <h1 className="text-4xl mt-5">POST</h1>
      <div className="flex flex-col justify-center items-center border border-emerald-400 w-2/4 h-36 p-8 rounded-md">
        {locationStates.post}
      </div>
      <hr className="h-8 w-full"></hr>
      <h2 className="text-4xl mt-5">COMMENTS</h2>
      <div className="flex flex-col justify-center items-center w-full gap-2">
        {postInfo.map((comment) => {
          return (
            <div
              key={comment.id}
              className="flex flex-col justify-center items-center p-8 w-3/4 border border-slate-700 rounded-md"
            >
              Comment:
              <div className="flex flex-col justify-center items-center border border-emerald-400 w-2/4 h-36 p-2 rounded-md m-2">
                {comment.body}
              </div>
              <div>Comment ID: {comment.id}</div>
              <div>
                User: <span className="italic ">{comment.name}</span> / User
                e-mail:
                <span className="italic">{comment.email}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
