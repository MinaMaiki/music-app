import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Links from "./components/Links";
import Start from "./Start";
import IntroLinks from "./components/Intro/IntroLinks";
import Lesons from "./components/Lesons";
import AboutTheProgram from "./components/Intro/AboutTheProgram";
import IntroAbProgram from "./components/Intro/IntroAbProgram";
import Nay from "./components/Intro/Nay";
import Summary from "./components/Summary";
function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-l from-[#ffff] to-[#acacac] ">
      <BrowserRouter>
        <Routes>
          <Route element={<Start />} path="/" />
          <Route element={<IntroLinks />} path="introlinks">
            <Route element={<AboutTheProgram />} path="about" />
            <Route element={<IntroAbProgram />} path="introofpro" />
            <Route element={<Nay />} path="nay" />
          </Route>
          <Route element={<Lesons />} path="/lesons/:id" />
          <Route element={<Links />} path="/links" />
          <Route element={<Summary />} path="/summary" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
