// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Links from "./components/Links";
// import Start from "./Start";
// import IntroLinks from "./components/Intro/IntroLinks";
// import Lesons from "./components/Lesons";
// import AboutTheProgram from "./components/Intro/AboutTheProgram";
// import IntroAbProgram1 from "./components/Intro/IntroAbProgram1";
// import Nay from "./components/Intro/Nay";
// import Summary from "./components/Summary";
// import logo from "../src/assists/logo dona.png";
// import IntroAbProgram2 from "./components/Intro/IntroAbProgram2";
// import IntroAbProgram3 from "./components/Intro/IntroAbProgram3";
// function App() {
//   return (
//     <div className="App min-h-screen bg-gradient-to-l from-[#ffff] to-[#acacac] ">
//       <div className="flex items-center justify-end px-4">
//         <img
//           className="rounded-full w-20 h-20 border-2 m-4 border-slate-300 object-cover"
//           src={logo}
//           alt="Logo"
//         />
//       </div>

//       <BrowserRouter>
//         <Routes>
//           <Route element={<Start />} path="/" />
//           <Route element={<IntroLinks />} path="introlinks">
//             <Route element={<AboutTheProgram />} path="about" />
//             <Route element={<IntroAbProgram1 />} path="introofpro1" />
//             <Route element={<IntroAbProgram2 />} path="introofpro2" />
//             <Route element={<IntroAbProgram3 />} path="introofpro3" />
//             <Route element={<Nay />} path="nay" />
//           </Route>
//           <Route element={<Lesons />} path="/lesons/:id" />
//           <Route element={<Links />} path="/links" />
//           <Route element={<Summary />} path="/summary" />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
