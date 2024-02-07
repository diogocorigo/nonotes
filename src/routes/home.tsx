import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";


export default function Home() {
    return (
        <Card className="bg-zinc-800 border-zinc-700 text-zinc-100 rounded">
            <CardHeader>
                <CardTitle className="text-4xl">Favorite Projects</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4"></CardContent>
            <CardFooter className="justify-center">
                <a href="/projects" className="text-sm">
                    View All
                </a>
            </CardFooter>
        </Card>
    );
}
