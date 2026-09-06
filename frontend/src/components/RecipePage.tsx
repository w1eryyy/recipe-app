import { useParams } from "react-router-dom";

import { getRecipesById } from "../api/api";
import { useEffect, useState } from "react";


interface Recipe {
  id: number,
  title: string,
  author: string,
  content: string,
  created_at: string;
}

export default function RecipePage() {


  const { id } = useParams();
  const [recipe, setResipe] = useState<Recipe|null>(null);

  useEffect(() => {
    const loadRecipe = async (id: number) => {
      try {
        const result = await getRecipesById(id);
        console.log(result.data);
        setResipe(result.data);
      } catch (error) {
        console.error(error)
      }
    };

    loadRecipe(Number(id));
  }, []);

   if (!recipe) return <div>Рецепт не найден</div>;

  return (
    <div>
      {recipe.created_at}
    </div>
  );
}