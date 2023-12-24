import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center p-24">
            <span className="text-5xl">Home Page</span>
            <Link
                className="mt-10 bg-white text-black p-2 rounded hover:scale-105 transition-all"
                href={"/about"}>
                Go to about page
            </Link>
        </main>
    );
}
