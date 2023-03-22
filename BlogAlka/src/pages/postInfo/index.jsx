import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostInfo() {
  let id = useParams();
  const [postInfo, setPostInfo] = useState([]);

  async function getPostInfo() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id.id}/comments`
    );
    const data = await response.json();
    console.log(data);
    setPostInfo(data);
  }

  useEffect(() => {
    getPostInfo();
  }, []);

  return (
    <>
      <h1>AQUI EU VOU TER OS COMENTARIOS DO POST CLICADO</h1>
      {postInfo.map((comment) => {
        return (
          <div key={comment.id}>
            Id do post:<div>{comment.postId}</div>
            Corpo:<div>{comment.body}</div>
            Comment ID:<div>{comment.id}</div>
            User Email:<div>{comment.email}</div>
            Nome:<div>{comment.name}</div>
          </div>
        );
      })}
    </>
  );
}
