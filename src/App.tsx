import { useState } from "react";
import { Container } from "./styled";
import { GlobalStyle } from "./GlobalStyle";

// 0 -> 1 -> 2 -> 3
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Container>
        <span className="counter">{count}</span>
        <button type="button" onClick={() => setCount(count + 1)}>
          Add
        </button>
      </Container>
    </>
  );
}

export default App;
