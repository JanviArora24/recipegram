import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const location = useLocation();
  const newRecipe = location.state?.newRecipe;

  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Masala Dosa",
      author: "Jai",
      description: "Crispy dosa with spiced potato stuffing.",
      image: "/images/dosa.jpg",
    },
    {
      id: 2,
      title: "Chole Bhature",
      author: "Aarav",
      description: "Spicy chickpeas with fried bhature.",
      image: "/images/chole.jpg",
    },
    {
      id: 3,
      title: "Paneer Butter Masala",
      author: "Janvi",
      description: "Rich, creamy and flavorful paneer curry.",
      image: "/images/paneer.jpg",
    },
  ]);

  useEffect(() => {
    if (newRecipe) {
      setRecipes((prev) => [newRecipe, ...prev]);
    }
  }, [newRecipe]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center my-4 text-red-600">
        Latest Recipes Feed
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
