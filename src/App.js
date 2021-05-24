import Popup from "./components/Popup";
import { useState } from "react";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="App">
      <main>
        <h1>React Popups</h1>
        <br></br>
        <button onClick={() => setButtonPopup(true)}>Open Popup</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h2>My Popup</h2>
        <p>This is my button triggered popup</p>
      </Popup>
    </div>
  );
}

export default App;
