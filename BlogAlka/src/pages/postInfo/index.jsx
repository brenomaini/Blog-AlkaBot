import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostInfo() {
  let id = useParams();
  const params = new URLSearchParams(window.location.pathname);
  const [page, setPage] = useState(1);
  async function getPostInfo() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id.id}/comments`
    );
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    getPostInfo();
  }, []);

  return (
    <>
      <h1>AQUI EU VOU TER OS COMENTARIOS DO POST CLICADO</h1>
    </>
  );
}
