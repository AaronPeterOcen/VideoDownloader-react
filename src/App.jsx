import { useState } from "react";
import Video from "./Video";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Video />
    </div>
  );
}

export default App;
