import "./App.css";
import AfterIntro from "./components/AfterIntro";
import Intro from "./components/Intro";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-l from-[#ffff] to-[#acacac] ">
      <BrowserRouter>
        <Routes>
          <Route element={<Intro />} path="/" />
          <Route element={<Main />} path="/main" />
          <Route element={<AfterIntro />} path="/afterintro" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
