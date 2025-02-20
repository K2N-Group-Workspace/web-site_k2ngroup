import { StrictMode } from "react";
// import React from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/Router";
import { ThemeProvider } from "./components/theme_provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router />
    </ThemeProvider>
  </StrictMode>
);
