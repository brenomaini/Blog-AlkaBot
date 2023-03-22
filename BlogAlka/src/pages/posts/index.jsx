import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  async function getPosts() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}`
    );
    const data = await response.json();
    setPosts(data);
  }
  function prevPage() {
    page > 1 ? setPage(page - 1) : null;
  }
  function nextPage() {
    setPage(page + 1);
  }

  useEffect(() => {
    getPosts();
  }, [page]);

  return (
    <div className="flex flex-col justify-center items-center gap-8 p-20">
      <h1 className="text-4xl mt-5">POSTS</h1>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            className="flex flex-col justify-center items-center border border-emerald-400 w-2/4 gap-4 rounded-md"
          >
            <span className="font-bold">TITLE</span>
            <span className="underline italic"> {post.title}</span>
            <span className="font-bold">POST</span>
            <span className="text-lg text-center bg-gradient-to-r from-emerald-400 to-cyan-200 p-4">
              {post.body}
            </span>
            <div className="flex gap-4 items-center">
              <Link
                to={`/postInfo/${post.id}`}
                className="hover:opacity-50 rounded-md bg-emerald-200 p-2 m-2 font-bold"
                state={{ from: "posts", post: `${post.body}` }}
              >
                Comments
              </Link>
              <a
                href={`/userInfo/${post.userId}`}
                className="hover:opacity-50 rounded-md bg-emerald-200 p-2 m-2 font-bold"
              >
                Posted by user: {post.userId}
              </a>
            </div>
          </div>
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
