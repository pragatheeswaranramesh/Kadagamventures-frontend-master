import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18+
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import App from "./App";
import "./styles.css"; // Ensure Tailwind or global styles are imported.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
