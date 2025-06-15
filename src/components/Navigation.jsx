import { Link } from "react-router-dom";

export default function Navigation() {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">
          🏠 Inicio
        </Link>
        <Link to="/profile" className="hover:underline">
          👤 Perfil
        </Link>
      </div>
      <button onClick={handleLogout} className="hover:underline">
        🚪 Cerrar sesión
      </button>
    </nav>
  );
}
