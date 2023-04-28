import React from "react";
import Cards from "./Cards";
import { Grid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
function Books({ input }) {
  const key = "";
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData", input],
    queryFn: () =>
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${input}&startIndex=0&maxResults=10&key=${key}`
      ).then((res) => res.json()),
    enabled: input !== "",
  });

  if (isLoading) return " ";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {data.items &&
          data.items.map((book) => <Cards key={book.id} book={book} />)}
      </Grid>
    </div>
  );
}

export default Books;
