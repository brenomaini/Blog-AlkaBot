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
    <div className="flex flex-col justify-center items-center gap-8 w-full p-20">
      <h1 className="text-4xl mt-5">USERS</h1>
      {users.map((user) => {
        return (
          <a
            href={`/userInfo/${user.id}`}
            className="flex flex-col items-center bg-gradient-to-r from-emerald-200 to-cyan-200 w-2/5 p-4 rounded-md hover:scale-105 hover:transition-all text-xl"
            key={user.id}
          >
            <div>
              <div>ID: {user.id}</div>
              <div>Name: {user.name}</div>
              <div>User: {user.username}</div>
              <div>E-mail: {user.email}</div>
            </div>
          </a>
        );
      })}
      <div className="flex gap-8">
        <button
          onClick={prevPage}
          className="hover:opacity-50 bg-emerald-500 w-16 rounded-full mb-10 text-white"
        >
          PREV
        </button>
        <button
          onClick={nextPage}
          className="hover:opacity-50 bg-emerald-500 w-16 rounded-full mb-10 text-white"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
