import { NavLink } from "react-router-dom";
import { Home, Plus, Search, User, Heart } from "lucide-react";

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md py-2 px-4 flex justify-between z-50">
      <NavLink
        to="/"
        className="flex flex-col items-center text-gray-600 hover:text-red-600"
      >
        <Home size={22} />
        <span className="text-xs">Home</span>
      </NavLink>
      <NavLink
        to="/add"
        className="flex flex-col items-center text-gray-600 hover:text-red-600"
      >
        <Plus size={22} />
        <span className="text-xs">Add</span>
      </NavLink>
      <NavLink
        to="/search"
        className="flex flex-col items-center text-gray-600 hover:text-red-600"
      >
        <Search size={22} />
        <span className="text-xs">Search</span>
      </NavLink>
      <NavLink
        to="/favorites"
        className="flex flex-col items-center text-gray-600 hover:text-red-600"
      >
        <Heart size={22} />
        <span className="text-xs">Saved</span>
      </NavLink>
      <NavLink
        to="/profile"
        className="flex flex-col items-center text-gray-600 hover:text-red-600"
      >
        <User size={22} />
        <span className="text-xs">Profile</span>
      </NavLink>
    </nav>
  );
}
