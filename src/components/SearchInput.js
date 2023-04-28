import { useState } from "react";
import "../App.css";
import { FormControl, Input, IconButton, Container } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchInput({ handleInputChange }) {
  const [input, setInput] = useState("");

  const handleSearchClick = () => {
    handleInputChange({ target: { value: input } });
  };

  return (
    <div>
      <h1>Book Search using React</h1>
      <Container>
        <FormControl style={{ display: "flex", alignItems: "center" }}>
          <Input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchClick();
              }
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ color: "white" }}
            placeholder="Book Title ..."
          />
          <IconButton
            onClick={handleSearchClick}
            colorScheme="black"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </FormControl>
      </Container>
    </div>
  );
}

export default SearchInput;
