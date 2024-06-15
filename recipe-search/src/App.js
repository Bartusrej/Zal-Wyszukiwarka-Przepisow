import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState(null);

  const fetchRecipes = async (query) => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=3380db78&app_key=153c9bf6dbc600cfb3338182d2a60e5f`
      );
      setRecipes(response.data.hits);
      setError(null); // Resetuj błąd po udanym zapytaniu
    } catch (error) {
      setError("Nie udało się pobrać przepisów. Spróbuj ponownie później.");
      console.error("Error fetching the recipes:", error);
    }
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      <GlobalStyles />
      <Header />
      {selectedRecipe ? (
        <RecipeDetails recipe={selectedRecipe} onBack={handleBack} />
      ) : (
        <>
          <SearchBar onSearch={fetchRecipes} />
          {error && <p>{error}</p>}
          <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
        </>
      )}
    </div>
  );
};

export default App;
