import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Link,
  Text,
  List,
  ListItem,
  ListIcon,
  Box,
} from "@chakra-ui/core";

export default function Ingredientpopover({ ingredients, id }) {
  const ingredientList = (
    <List color="#5a6268">
      {ingredients.map((i) => (
        <ListItem key={i.name}>
          <ListIcon icon="chevron-right" color="green.500" />
          {i.name}
        </ListItem>
      ))}
    </List>
  );

  const recipeUrl = `recipes/${id}`;
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Text pr={2} textAlign="right" fontSize="xs" color="#5a6268">
          <ListIcon icon="chevron-right" color="green.500" />{" "}
          <Link href={recipeUrl}>ingrediënten</Link>
        </Text>
      </PopoverTrigger>

      <PopoverContent>
        <Box p={2} zIndex={4}>
          {ingredientList}
        </Box>
      </PopoverContent>
    </Popover>
  );
}
