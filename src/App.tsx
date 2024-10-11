import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";
import "./components/GlobalStyles/GlobalStyles.css";
import "./components/GlobalStyles/custom.css";

import { AuthProvider } from "./routes/provider/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import Error from "./pages/Error";
import './i18n/i18n';
function App() {
  return (
    <>
      <main className="flex  md:px-0 w-full flex-wrap h-screen relative">
        <AuthProvider>
          <Routes>
            {publicRoutes.map((item, index) => {
              const Layout = item.layout;
              return (
                <Route key={index} element={<Layout />}>
                  {item.routes.map((route, index) => {
                    const Page = route.component;
                    return (
                      <Route
                        key={index}
                        path={route.path}
                        element={
                          <>
                            <Page />
                          </>
                        }
                      />
                    );
                  })}
                </Route>
              );
            })}

            {privateRoutes.map((item, index) => {
              const Layout = item.layout;
              return (
                <Route key={index} element={<PrivateRoute />}>
                  <Route key={index} element={<Layout />}>
                    {item.routes.map((route, index) => {
                      const Page = route.component;
                      return (
                        <Route
                          key={index}
                          path={route.path}
                          element={
                            <>
                              <Page />
                            </>
                          }
                        />
                      );
                    })}
                  </Route>
                </Route>
              );
            })}

            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </main>
    </>
  );
}

export default App;
