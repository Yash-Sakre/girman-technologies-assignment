import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import wave from "@/assets/bgimage.png";

function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${wave})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute bottom-0 left-0 w-full h-[75%] "
        style={{
          background:
            "linear-gradient(to top, rgba(177, 203, 255, 0.6), rgba(177, 203, 255, 0))",
        }}
      ></div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
