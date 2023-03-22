import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserInfo() {
  let id = useParams();
  const [page, setPage] = useState(1);
  const [user, setUser] = useState([]);

  async function getUserInfo() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id.id}`
    );
    const data = await response.json();
    setUser(data);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <>
      <h1>AQUI EU VOU TER AS INFORMAÇOES DO USUARIO SELECIONADO</h1>
      {user.name}
    </>
  );
}
