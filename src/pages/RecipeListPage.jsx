import { Heading, Flex, Box } from "@chakra-ui/react";
import { newData } from "../App";
import { RecipeSearch } from "../components/RecipeSearch";
import { useState } from "react";
import { RecipeDetails } from "../components/RecipeDetails";

export const RecipeListPage = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <Flex align={"center"} h="100vh" flexDir="column">
      <Heading mb={[4, 6, 8]} mt={[4, 6, 8]}>
        {" "}
        Your Recipe App
      </Heading>

      {selectedRecipe ? (
        <RecipeDetails
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      ) : (
        <Box mt={6} mb={6} width="100%" maxW="840px">
          <RecipeSearch recipes={newData} clickFn={setSelectedRecipe} />
        </Box>
      )}
    </Flex>
  );
};
