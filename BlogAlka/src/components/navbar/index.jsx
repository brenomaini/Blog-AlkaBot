import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-around items-center h-24 w-full bg-gradient-to-r from-cyan-500 to-emerald-500 fixed">
        <Link className="text-white text-3xl hover:opacity-70" to="/">
          Listagem de posts
        </Link>
        <Link className="text-white text-3xl hover:opacity-70" to="/users">
          Listagem de usuários
        </Link>
      </nav>
    </>
  );
}
