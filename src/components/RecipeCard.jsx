import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{recipe.title}</h2>
        <p className="text-sm text-gray-500 mb-1">by {recipe.author}</p>
        <p className="text-sm text-gray-700 line-clamp-2">
          {recipe.description}
        </p>

        <Link
          to={`/recipe/${recipe.id}`}
          className="text-red-500 text-sm font-medium mt-2 inline-block"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
