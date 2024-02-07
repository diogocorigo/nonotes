import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";
import { Sidebar } from "@/components/custom/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

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
            <ScrollArea className="flex-1 p-4 pb-0">
                <RouterProvider router={router} />
            </ScrollArea>
        </div>
    </React.StrictMode>
);
