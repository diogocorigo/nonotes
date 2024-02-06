import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";
import { Sidebar } from "@/components/custom/Sidebar";

import ErrorPage from "./error-page";
import Home from "./routes/home";
import Calendar from "./routes/calendar";
import Projects from "./routes/projects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "calendar",
        element: <Calendar />,
        errorElement: <ErrorPage />,
    },
    {
        path: "projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <div className="h-screen flex bg-zinc-950 text-zinc-100">
            {/* Sidebar */}
            <Sidebar />
            {/* Main */}
            <main className="flex-1 p-4">
                <RouterProvider router={router} />
            </main>
        </div>
    </React.StrictMode>
);
