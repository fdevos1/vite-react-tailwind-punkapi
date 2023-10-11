import { lazy, Suspense, useContext } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import BeersProvider from "./contexts/beersContext";
import Layout from "./components/Layout";
import ErrorFallback from "./components/ErrorFallback";
import BeerInfoSkeleton from "./components/skeletons/BeerInfoSkeleton";
import Login from "./pages/Login";
import { AuthContext, AuthProvider } from "./contexts/authContext";
import UserProvider from "./contexts/userContext";

const BeerInfo = lazy(() => import("./pages/BeerInfo"));

function App() {
  const Private = ({ children }: { children: React.ReactNode }) => {
    const { authenticated, loading } = useContext(AuthContext) as {
      authenticated: boolean;
      loading: boolean;
    };

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className="app w-screen h-screen">
      <BrowserRouter>
        <AuthProvider>
          <BeersProvider>
            <UserProvider>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route
                    path="/login"
                    element={
                      <>
                        <Login />
                      </>
                    }
                  />

                  <Route
                    path="/home"
                    element={
                      <Private>
                        <Home />
                      </Private>
                    }
                  />

                  <Route
                    path="/beer_information/:id"
                    element={
                      <Private>
                        <ErrorBoundary FallbackComponent={ErrorFallback}>
                          <Suspense fallback={<BeerInfoSkeleton />}>
                            <BeerInfo />
                          </Suspense>
                        </ErrorBoundary>
                      </Private>
                    }
                  />
                </Route>
              </Routes>
            </UserProvider>
          </BeersProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
