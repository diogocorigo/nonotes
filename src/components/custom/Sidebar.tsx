import { Calendar, Home, Library, Star, Clock10 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-900 border-r border-r-zinc-700 flex flex-col p-4">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-4">
                <a
                    href="/"
                    className="flex gap-4 p-2 rounded hover:bg-zinc-700"
                >
                    <Home /> <span>Home</span>
                </a>
                <a
                    href="/calendar"
                    className="flex gap-4 p-2 rounded hover:bg-zinc-700"
                >
                    <Calendar /> <span>Calendar</span>
                </a>
                <a
                    href="/projects"
                    className="flex gap-4 p-2 rounded hover:bg-zinc-700"
                >
                    <Library /> <span>Projects</span>
                </a>
            </div>
            <Separator className="bg-zinc-800 my-4" />
            {/* Projects */}
            <div className="flex flex-1 flex-col">
                <Input
                    placeholder="Search Projects"
                    className="border-zinc-700 focus:border-zinc-100 border-2 py-5 text-zinc-100"
                />
                <h1 className="flex items-center gap-2 mt-4 mb-2 px-2 text-md">
                    <Star className="w-5 h-5" /> Favorite Projects:
                </h1>
                <div className="flex flex-col gap-2 pl-4">
                    <a
                        href="#"
                        className="text-sm text-zinc-400 hover:text-zinc-200"
                    >
                        Project XPTO
                    </a>
                    <a
                        href="#"
                        className="text-sm text-zinc-400 hover:text-zinc-200"
                    >
                        Project OTPX
                    </a>
                    <a
                        href="#"
                        className="text-sm text-zinc-400 hover:text-zinc-200"
                    >
                        Project PXTO
                    </a>
                </div>
                <Separator className="bg-zinc-800 mt-4" />
                <h1 className="flex items-center gap-2 mt-4 mb-2 px-2 text-md">
                    <Clock10 className="w-5 h-5" /> Recent Projects:
                </h1>
                <div className="flex flex-col gap-2 pl-4">
                    <a
                        href="#"
                        className="text-sm text-zinc-400 hover:text-zinc-200"
                    >
                        Project XPTO
                    </a>
                    <a
                        href="#"
                        className="text-sm text-zinc-400 hover:text-zinc-200"
                    >
                        Project OTPX
                    </a>
                    <a
                        href="#"
                        className="text-sm text-zinc-400 hover:text-zinc-200"
                    >
                        Project PXTO
                    </a>
                    <a
                        href="#"
                        className="text-sm text-zinc-400 hover:text-zinc-200"
                    >
                        Project TXPO
                    </a>
                    <a
                        href="#"
                        className="text-sm text-zinc-400 hover:text-zinc-200"
                    >
                        Project XOPT
                    </a>
                </div>
            </div>
            {/* Profile */}
            <div className="p-2 rounded hover:bg-zinc-700 cursor-pointer">
                <DropdownMenu>
                    <DropdownMenuTrigger className="w-full flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>US</AvatarFallback>
                        </Avatar>
                        <h1 className="text-xl text-zinc-200">Utilizador</h1>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        side="right"
                        className="bg-zinc-900 border-zinc-800 text-zinc-100"
                    >
                        <DropdownMenuItem>Change Theme</DropdownMenuItem>
                        <DropdownMenuItem>Change Language</DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-zinc-800" />
                        <DropdownMenuItem>Accout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </aside>
    );
}
