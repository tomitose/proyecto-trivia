import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ruleta from "./components/Ruleta/Ruleta";
import Memo from "./components/Memo/Memo";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/memo" element={<Memo />}></Route>
        <Route path="/ruleta" element={<Ruleta />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
