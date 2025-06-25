import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function TopNavbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white border-b px-4 py-3 flex justify-between items-center shadow-sm">
      <Link to="/" className="text-xl font-bold text-red-600">
        🍲 RecipeGram
      </Link>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-gray-700 text-sm">Hi, {user.name}</span>
          <button
            onClick={logout}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-3 text-sm">
          <Link to="/login" className="text-gray-600 hover:text-red-600">
            Login
          </Link>
          <Link to="/register" className="text-gray-600 hover:text-red-600">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
