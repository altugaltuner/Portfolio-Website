import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-4 xl:py-12 text-white bg-transparent">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-3xl font-semibold md:text-4xl">
                        Altuğ<span className="text-accent">.</span>
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/hire">
                        <Button className="bg-green-600 hover:bg-green-800 p-5">Chat with me</Button>
                    </Link>
                </div>
                <div>
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;