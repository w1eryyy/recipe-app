import { getRecipes} from "../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Recipe {
  id: number,
  title: string,
  author: string,
  content: string,
  created_at: string;
}

export default function RecipesList() {
  const [ recipes, setRecipes ] = useState<Recipe[]>([]);
  const [ loading, setLoading ] = useState<boolean>(true);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const result = await getRecipes();
        console.log(result.data)
        setRecipes(result.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  if (loading) return (
    <div>Загрузка...</div>
  );

  return (
    <div>
      <h1>Все рецепты:</h1>
      {recipes.length === 0 ? (
        <p>Рецепты еще не были добавлены</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <Link to={`/recipes/${recipe.id}`}>
              <li key={recipe.id} className="recipe">
                <h2>{recipe.title}</h2>
                <p>{recipe.content}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );

}