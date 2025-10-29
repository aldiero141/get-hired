import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { queryClient } from "./lib/queryClient";
import { AppRoutes } from "./routes";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
      <Toaster position="bottom-left" />
    </QueryClientProvider>
  </StrictMode>,
);
