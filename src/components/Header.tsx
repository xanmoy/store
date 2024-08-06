import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-zinc-950 text-white p-4">
            <div className="container mx-auto">
                <Link href="/" className="text-2xl font-bold">
                    XStore
                </Link>
            </div>
        </header>
    );
}