import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BeersProvider from "./contexts/beersContext";
import Layout from "./components/Layout";
import ErrorFallback from "./components/ErrorFallback";
import BeerInfoSkeleton from "./components/skeletons/BeerInfoSkeleton";

const BeerInfo = lazy(() => import("./pages/BeerInfo"));

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
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<BeerInfoSkeleton />}>
                      <BeerInfo />
                    </Suspense>
                  </ErrorBoundary>
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
