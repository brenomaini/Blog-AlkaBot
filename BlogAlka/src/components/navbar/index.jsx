import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-around">
        <Link className="" to="/">
          Listagem de posts
        </Link>
        <Link to="/users">Listagem de usuários</Link>
      </nav>
    </>
  );
}
