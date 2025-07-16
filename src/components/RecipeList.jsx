import { RecipeItem } from "./RecipeItem";
import { SimpleGrid } from "@chakra-ui/react";

export const RecipeList = ({ recipes = [], clickFn }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6} p={3}>
      {recipes.map((recipe) => (
        <RecipeItem clickFn={clickFn} key={recipe.id} recipe={recipe} />
      ))}
    </SimpleGrid>
  );
};
