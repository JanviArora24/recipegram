import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // ✅ use Auth context
import TopNavbar from "./components/TopNavbar";
import BottomNavbar from "./components/BottomNavbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";

function App() {
  const { user, logout } = useAuth(); // ✅ Replace useState with useAuth
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <TopNavbar user={user} onLogout={handleLogout} />

      <div className="pb-20 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add"
            element={
              <ProtectedRoute user={user}>
                <AddRecipe />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute user={user}>
                <Favorites />
              </ProtectedRoute>
            }
          />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      {user && <BottomNavbar />}
    </>
  );
}

export default App;
