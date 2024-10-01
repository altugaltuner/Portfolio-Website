import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white bg-transparent">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Altuğ<span className="text-accent">.</span>
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/hire">
                        <Button className="hover:bg-green-600">Chat with me</Button>
                    </Link>
                </div>
                <div className="">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;