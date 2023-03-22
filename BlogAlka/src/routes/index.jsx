import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar";
import PostInfo from "../pages/postInfo";
import Posts from "../pages/posts";
import UserInfo from "../pages/userInfo/userInfo";
import UsersList from "../pages/users";
import "../styles/global.css";

export default function BlogRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/postInfo/:id" element={<PostInfo />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/userInfo/:id" element={<UserInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

// ● Listagem de posts:
// o https://jsonplaceholder.typicode.com/posts
// ● Listagem de comentários de um post:
// o https://jsonplaceholder.typicode.com/posts/[ID]/comments
// ● Listagem de usuários:
// o https://jsonplaceholder.typicode.com/users
// ● Detalhes de um usuário:
// o https://jsonplaceholder.typicode.com/users/[ID]
