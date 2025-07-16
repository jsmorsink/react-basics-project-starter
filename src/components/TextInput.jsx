import { Input } from "@chakra-ui/react";

export const TextInput = ({ value, onChange }) => {
  return (
    <Input
      variant={"subtle"}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search Recipes"
    />
  );
};
