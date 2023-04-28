import "./App.css";
import SearchInput from "./components/SearchInput";
import { ChakraProvider } from "@chakra-ui/react";
import Books from "./components/Books";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => setInput(event.target.value);

  return (
    <div className="App">
      <ChakraProvider>
        <SearchInput handleInputChange={handleInputChange} />
        <Books input={input} />
      </ChakraProvider>
    </div>
  );
}

export default App;
