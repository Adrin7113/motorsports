import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <div className="min-h-screen max-w-screen">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
