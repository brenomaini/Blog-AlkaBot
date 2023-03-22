import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserInfo() {
  let id = useParams();
  const params = new URLSearchParams(window.location.pathname);
  const [page, setPage] = useState(1);
  async function getUserInfo() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id.id}`
    );
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <h1>AQUI EU VOU TER AS INFORMAÇOES DO USUARIO SELECIONADO</h1>
    </>
  );
}
