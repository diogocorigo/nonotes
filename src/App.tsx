import { Home, Library } from "lucide-react";
import { Input } from "./components/ui/input";
import { Separator } from "./components/ui/separator";

export default function App() {
    return (
        <div className="h-screen flex bg-zinc-950 text-zinc-100">
            {/* Sidebar */}
            <aside className="w-72 bg-zinc-900 border-r border-r-zinc-700 flex flex-col p-4">
                {/* Navigation Links */}
                <div className="flex flex-col space-y-4">
                    <a
                        href="#home"
                        className="flex gap-4 p-2 rounded hover:bg-zinc-700"
                    >
                        <Home /> <span>Home</span>
                    </a>
                    <a
                        href="#projects"
                        className="flex gap-4 p-2 rounded hover:bg-zinc-700"
                    >
                        <Library /> <span>Projects</span>
                    </a>
                </div>
                <Separator className="bg-zinc-800 my-4" />
                {/* Projects Search Bar */}
            </aside>
            {/* Main */}
            <main className="flex-1">
                <h1>Main</h1>
            </main>
        </div>
    );
}
