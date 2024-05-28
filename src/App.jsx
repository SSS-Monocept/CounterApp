import "./App.css";
import { useState } from "react";
import { CustomButton } from "./CustomButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  );
}

export default App;
