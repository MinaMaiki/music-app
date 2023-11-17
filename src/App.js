import React, { useEffect } from "react";
import "./App.css";
import Main from "./Main";

function App() {
  // useEffect(() => {
  //   if (window.screen.orientation && window.screen.orientation.lock) {
  //     window.screen.orientation.lock("landscape");
  //   }

  //   // Clean up the effect when the component unmounts
  //   return () => {
  //     if (window.screen.orientation && window.screen.orientation.unlock) {
  //       window.screen.orientation.unlock();
  //     }
  //   };
  // }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
