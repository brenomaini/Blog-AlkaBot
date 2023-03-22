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
