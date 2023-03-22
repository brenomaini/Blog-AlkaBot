import React, { useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  async function getUsers() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${page}`
    );
    const data = await response.json();
    setUsers(data);
    console.log(data);
  }
  function prevPage() {
    page > 1 ? setPage(page - 1) : null;
  }
  function nextPage() {
    users.length > 10
      ? setPage(page + 1)
      : alert(`Já estão listados todos os users: ${users.length}`);
  }

  useEffect(() => {
    getUsers();
  }, [page]);

  return (
    <>
      <h1>AQUI EU VOU TER TODOS OS USUARIOS</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <a href={`/userInfo/${user.id}`}>
              {user.id}
              {user.name}
              {user.username}
              {user.email}
              {user.address.street}
              {user.address.suite}
              {user.address.city}
              {user.address.zipcode}
            </a>
          </div>
        );
      })}

      <button onClick={prevPage}>PREV</button>
      <button onClick={nextPage}>NEXT</button>
    </>
  );
}
