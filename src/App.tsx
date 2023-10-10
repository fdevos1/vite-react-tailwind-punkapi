import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BeersProvider from "./contexts/beersContext";
import Layout from "./components/Layout";
import BeerInfo from "./pages/BeerInfo";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <BeersProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                  </>
                }
              />

              <Route
                path="/informacoes_cerveja/:id"
                element={
                  <>
                    <BeerInfo />
                  </>
                }
              />
            </Route>
          </Routes>
        </BeersProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
