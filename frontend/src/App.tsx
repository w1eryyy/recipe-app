import RecipesList from "./components/RecipesList";
import RecipePage from "./components/RecipePage";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "../App.css";


export default function App() {
  return (
    <div className="screen">
      <BrowserRouter>
        <nav>
          <Link to='/'>Главная</Link>
        </nav>
        <Routes>
          <Route path="/" element={<RecipesList />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}