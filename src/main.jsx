import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className="max-w-screen-xl mx-auto px-4">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
