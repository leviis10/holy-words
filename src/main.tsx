/* eslint-disable react-refresh/only-export-components */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/ui/Layout";
import "./index.css";
import store from "./store";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const Usage = React.lazy(() => import("./pages/Usage"));
const QuotesPage = React.lazy(() => import("./pages/QuotesPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "quotes",
        element: <QuotesPage />,
      },
      {
        path: "api-docs",
        element: <Usage />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
