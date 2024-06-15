import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 10px;
  width: 300px;
  cursor: pointer;
`;

const RecipeCard = ({ recipe, onRecipeClick }) => (
  <StyledCard onClick={() => onRecipeClick(recipe)}>
    <CardMedia
      component="img"
      alt={recipe.label}
      height="140"
      image={recipe.image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {recipe.label}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Kalorie: {Math.round(recipe.calories)}
      </Typography>
    </CardContent>
  </StyledCard>
);

export default RecipeCard;
