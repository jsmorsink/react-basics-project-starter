import { HStack, Tag, Button, Image, Text, Box } from "@chakra-ui/react";

export const RecipeItem = ({ recipe, clickFn }) => {
  return (
    <Button
      onClick={() => clickFn(recipe)}
      variant={"outline"}
      height={"auto"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      p={0}
      justifyContent={"flex-start"}
    >
      <Image
        src={recipe.image}
        alt={recipe.label}
        height={["120px", "150px", "180px"]}
        width={"100%"}
        objectFit={"cover"}
        roundedTop={"md"}
        mt={0}
      />

      <Box p={3} textAlign="center" width="100%">
        <Text mb={1} fontSize={"sm"} textColor={"grey"}>
          {" "}
          {recipe.mealType}
        </Text>

        <Text
          mt={1}
          fontSize={["sm", "md", "lg"]}
          padding={3}
          whiteSpace={"normal"}
          textAlign={"center"}
        >
          {" "}
          {recipe.label}
        </Text>

        <Text
          mt={1}
          fontSize={"sm"}
          padding={2}
          border="1px solid"
          borderColor="gray.500"
          borderRadius="md"
        >
          {" "}
          {recipe.dishType}
        </Text>

        <HStack spacing={2} mt={2} justifyContent="center">
          {recipe.healthLabels?.map((label) => {
            if (label === "Vegetarian") {
              return (
                <Tag key={label} colorScheme="green">
                  {label}
                </Tag>
              );
            }
            if (label === "Vegan") {
              return (
                <Tag key={label} colorScheme="blue">
                  {label}
                </Tag>
              );
            }
            return null;
          })}
        </HStack>

        <HStack spacing={2} mt={2} justifyContent="center">
          {recipe.dietLabels?.map((label) => {
            if (label === "Low-Carb") {
              return (
                <Tag key={label} colorScheme="green">
                  {label}
                </Tag>
              );
            }
            if (label === "Low-Sodium") {
              return (
                <Tag key={label} colorScheme="blue">
                  {label}
                </Tag>
              );
            }

            return null;
          })}
        </HStack>

        {recipe.cautions?.length > 0 && (
          <Box textAlign={"center"}>
            <Text
              mt={1}
              fontSize="sm"
              padding={2}
              color="red.500"
              textAlign={"center"}
              whiteSpace={"normal"}
            >
              Caution: {recipe.cautions.join(", ")}
            </Text>
          </Box>
        )}
      </Box>
    </Button>
  );
};
