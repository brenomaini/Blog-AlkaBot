import React, { useEffect, useState } from "react";
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
    <>
      <h1>AQUI EU VOU TER TODOS OS POSTS</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            Post Title:<div> {post.title}</div>
            Post Body:<div> {post.body}</div>
            Post ID:<a href={`/postInfo/${post.id}`}> {post.id}</a>
            User:<a href={`/userInfo/${post.userId}`}> {post.userId}</a>
          </div>
        );
      })}
      <button onClick={prevPage}>PREV</button>
      <button onClick={nextPage}>NEXT</button>
    </>
  );
}
