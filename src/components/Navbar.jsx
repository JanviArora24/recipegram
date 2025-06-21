const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow flex justify-between">
      <h1 className="text-xl font-bold text-red-600">RecipeGram 🍲</h1>
      <div className="space-x-4">
        <button className="text-gray-700 hover:text-red-500">Login</button>
        <button className="text-gray-700 hover:text-red-500">Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
