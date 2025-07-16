import {
  Box,
  Image,
  Text,
  Heading,
  Button,
  Tag,
  Stack,
  SimpleGrid,
  List,
  ListItem,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export const RecipeDetails = ({ recipe, onBack }) => {
  return (
    <Box maxW="container.md" mx="auto" p={4}>
      <Image
        src={recipe.image}
        alt={recipe.label}
        height={["120px", "150px", "180px"]}
        width={"100%"}
        objectFit={"cover"}
        roundedTop={"md"}
        mt={0}
      />

      <Heading size={"md"} mb={6} mt={6}>
        {recipe.label}
      </Heading>

      <Stack align="start" spacing={0}>
        <Text>
          <strong>Total Cooking Time:</strong> {recipe.totalTime} min
        </Text>
        <Text>
          <strong>Servings:</strong> {recipe.yield}
        </Text>
        <Text color="red">
          <strong>Cautions: </strong>
          {recipe.cautions?.length > 0
            ? recipe.cautions.join(", ")
            : "No cautions"}
        </Text>

        <SimpleGrid columns={[1, null, 2]} spacing={6} mt={3}>
          <Box>
            <Heading size="md" mb={4} mt={6}>
              Ingrediënts
            </Heading>
            <List spacing={1}>
              {recipe.ingredientLines.map((line, i) => (
                <ListItem key={i}>• {line}</ListItem>
              ))}
            </List>
          </Box>

          <Box>
            <Heading size="md" mb={4} mt={6}>
              Nutritients
            </Heading>
            <List spacing={1}>
              <ListItem>
                ✔️ {recipe.totalNutrients.ENERC_KCAL.label}:{" "}
                {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
                {recipe.totalNutrients.ENERC_KCAL.unit}
              </ListItem>
              <ListItem>
                ✔️ {recipe.totalNutrients.PROCNT.label} :{" "}
                {Math.round(recipe.totalNutrients.PROCNT.quantity)}{" "}
                {recipe.totalNutrients.PROCNT.unit}
              </ListItem>
              <ListItem>
                ✔️ {recipe.totalNutrients.FAT.label}:{" "}
                {Math.round(recipe.totalNutrients.FAT.quantity)}{" "}
                {recipe.totalNutrients.FAT.unit}
              </ListItem>
              <ListItem>
                ✔️ {recipe.totalNutrients.CHOCDF.label}:{" "}
                {Math.round(recipe.totalNutrients.CHOCDF.quantity)}{" "}
                {recipe.totalNutrients.CHOCDF.unit}
              </ListItem>
              <ListItem>
                ✔️ {recipe.totalNutrients.CHOLE.label}:{" "}
                {Math.round(recipe.totalNutrients.CHOLE.quantity)}{" "}
                {recipe.totalNutrients.CHOLE.unit}
              </ListItem>
              <ListItem>
                ✔️ {recipe.totalNutrients.NA.label}:{" "}
                {Math.round(recipe.totalNutrients.NA.quantity)}{" "}
                {recipe.totalNutrients.NA.unit}
              </ListItem>
            </List>
          </Box>

          <Box>
            <Heading size="md" mb={4} mt={6}>
              Health Labels
            </Heading>
            <Wrap>
              {recipe.healthLabels?.map((label) => (
                <WrapItem key={label}>
                  <Tag colorScheme="purple">{label}</Tag>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </SimpleGrid>
      </Stack>
      <Button mt={6} colorScheme="grey" variant={"outline"} onClick={onBack}>
        Back
      </Button>
    </Box>
  );
};
