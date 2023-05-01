import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Support from "./pages/Support";
import History from "./pages/History";
import Crew from "./pages/Crew";

function App() {
  return (
    <div className="min-h-screen max-w-screen">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Main />
              </>
            }
          />
          <Route
            path="/crew"
            element={
              <>
                <Navbar />
                <Crew />
              </>
            }
          />
          <Route
            path="/history"
            element={
              <>
                <Navbar />
                <History />
              </>
            }
          />
          <Route
            path="/support"
            element={
              <>
                <Navbar />
                <Support />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
