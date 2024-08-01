import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Memo from "./components/Memo/Memo";
import Home from "./components/Home/Home";
import DragDrop from "./components/DragDrop/DragDrop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/memo" element={<Memo />}></Route>
        <Route path="/dragdrop" element={<DragDrop/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
