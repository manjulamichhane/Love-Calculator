import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import LoveCalculator from "./LoveCalculator";

function App() {
  // const [value, setValue] = useState(1);
  // const handleIncrement = () => {
  //   if (value == 10) {
  //     return;
  //   } else {
  //     setValue(value + 1);
  //   }
  // };
  // const handleDecrement = () => {
  //   if (value == 1) {
  //     return;
  //   } else {
  //     setValue(value - 1);
  //   }
  // };
  // return (
  //   <div style={{ marginTop: "4rem" }} className="App">
  //     <div
  //       style={{
  //         marginTop: "3rem",
  //         display: "flex",
  //         alignItems: "center",
  //         height: "100vh",
  //         justifyContent: "center",
  //         gap: "1rem",
  //       }}
  //     >
  //       <button
  //         onClick={handleIncrement}
  //         style={{
  //           cursor: "pointer",
  //           background: "blue",
  //           color: "white",
  //           padding: "0.5rem",
  //           fontSize: "2rem",
  //           height: "3rem",
  //           width: "5rem",
  //         }}
  //       >
  //         +
  //       </button>
  //       <p style={{ fontSize: "2rem" }}>{value}</p>
  //       <button
  //         onClick={handleDecrement}
  //         style={{
  //           cursor: "pointer",
  //           background: "blue",
  //           color: "white",
  //           padding: "0.5rem",
  //           fontSize: "2rem",
  //           height: "3rem",
  //           width: "5rem",
  //         }}
  //       >
  //         -
  //       </button>
  //     </div>
  //   </div>
  // );
  return <LoveCalculator />;
}

export default App;
