import { RecipeList } from "./RecipeList";
import { TextInput } from "./TextInput";
import { useState } from "react";
import { HStack, Tag } from "@chakra-ui/react";

export const RecipeSearch = ({ recipes, clickFn }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [healthLabelFilter, setFilter] = useState("");

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const allHealthLabels = [
    ...new Set(recipes.flatMap((recipe) => recipe.healthLabels || [])),
  ];

  console.log(recipes);
  const matchedRecipe = recipes.filter((recipe) => {
    const searchMatch = recipe.label
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const healthLabelMatch =
      !healthLabelFilter || recipe.healthLabels?.includes(healthLabelFilter);

    console.log(
      recipe.label,
      searchTerm,
      healthLabelFilter,
      searchMatch,
      healthLabelMatch
    );

    return searchMatch && healthLabelMatch;
  });

  return (
    <div className="recipe-search">
      <TextInput value={searchTerm} onChange={handleSearchChange} />

      <HStack wrap="wrap" spacing={2} my={4}>
        {allHealthLabels.map((label) => (
          <Tag
            key={label}
            onClick={() => setFilter((prev) => (prev === label ? "" : label))}
            variant={healthLabelFilter === label ? "solid" : "subtle"}
            colorScheme="purple"
            cursor="pointer"
          >
            {label}
          </Tag>
        ))}
      </HStack>

      <RecipeList recipes={matchedRecipe} clickFn={clickFn} />
    </div>
  );
};
