import React from 'react';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RecipeList = ({ recipes, onRecipeClick }) => (
  <ListContainer>
    {recipes.map((recipeData) => (
      <RecipeCard key={recipeData.recipe.uri} recipe={recipeData.recipe} onRecipeClick={onRecipeClick} />
    ))}
  </ListContainer>
);

export default RecipeList;
