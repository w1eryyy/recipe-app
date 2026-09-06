import { getRecipes, deleteRecipe } from "../api/api";
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
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const result = await getRecipes();
        console.log(result.data);
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

  const handleDelete = async (id: number) => {
    if (!confirm('Уверены?')) return;
    try {
      await deleteRecipe(id);
      setRecipes(res => res.filter(recipe => recipe.id !== id));
      console.log(`recipe ${id} was deleted`);
    } catch (error) {
      console.error(error);
      alert('Не удалось удалить рецепт');
    }
  };

  return (
    <div>
      <h1>Все рецепты:</h1>
      {recipes.length === 0 ? (
        <p>Рецепты еще не были добавлены</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id} className="recipe">
              <Link to={`/recipes/${recipe.id}`}>
                <h2>{recipe.title}</h2>
                <p>{recipe.content}</p>
              </Link>
              <button className='delete-btn' onClick={(e) => {
                e.stopPropagation();
                handleDelete(recipe.id);
              }}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

}