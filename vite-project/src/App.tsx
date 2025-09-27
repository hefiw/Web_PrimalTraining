import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../../css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
