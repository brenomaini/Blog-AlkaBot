import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserInfo() {
  let id = useParams();
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
      {user != "" ? (
        <div className="flex flex-col items-center gap-8 p-20 max-sm:">
          <h1 className="text-4xl mt-5 italic underline max-sm:text-2xl">
            {user.name}
          </h1>
          <div className="flex flex-col gap-2">
            <div>
              <span className="font-bold">Name:</span> {user.name}
            </div>
            <div>
              <span className="font-bold">Username:</span> {user.username}
            </div>
            <div>
              <span className="font-bold">E-Mail: </span>
              {user.email}
            </div>
            <div>
              <span className="font-bold">ID: </span>
              {user.id}
            </div>
            <div className="mt-8">
              <span className="font-bold flex flex-col items-center">
                Address
              </span>
              <div>
                <span className="font-bold">Street:</span> {user.address.street}{" "}
                /{user.address.suite}
              </div>
              <div>
                <span className="font-bold">City:</span>
                {user.address.city} / <span className="font-bold">ZIP: </span>
                {user.address.zipcode}
              </div>
            </div>
            <div className="my-8">
              <span className="font-bold flex flex-col items-center">
                Company
              </span>
              <div>
                <span className="font-bold">Company name: </span>
                {user.company.name}
              </div>
              <div>
                <span className="font-bold">Company bs: </span>
                {user.company.bs}
              </div>
            </div>
            <div>
              <span className="font-bold">Phone: </span>
              {user.phone}
            </div>
            <div>
              <span className="font-bold">Website: </span>
              {user.website}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
