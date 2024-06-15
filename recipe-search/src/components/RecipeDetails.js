import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import styled from 'styled-components';

const DetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const RecipeDetails = ({ recipe, onBack }) => {
  return (
    <DetailsContainer>
      <Card>
        <CardMedia
          component="img"
          alt={recipe.label}
          height="300"
          image={recipe.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Kalorie: {Math.round(recipe.calories)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Składniki:
            <ul>
              {recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Typography>
          <Button variant="contained" color="primary" onClick={onBack}>
            Wróć
          </Button>
        </CardContent>
      </Card>
    </DetailsContainer>
  );
};

export default RecipeDetails;
