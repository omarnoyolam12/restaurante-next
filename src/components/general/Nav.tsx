import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { MenuMovil } from ".";
import logo from "../../images/logo.png";

export const Nav = () => {

    const router = useRouter();

    return (
        <nav className="flex justify-between items-center container mx-auto px-3 mt-3">

            <Image
                src={logo}
                width={120}
                height={120}
                alt="Logo Restaurante"
            />

            <ul className="hidden md:flex justify-center items-center gap-5">
                <li className={`text-white text-xl ${router.pathname === '/' && 'bg-white text-zinc-800 px-5 py-1 rounded-sm'}`}>
                    <Link href="/">Home</Link>
                </li>
                <li className={`text-white text-xl ${router.pathname === '/gallery' && 'bg-white text-zinc-800 px-5 py-1 rounded-sm'}`}>
                    <Link href="/gallery">Gallery</Link>
                </li>
                <li className="text-white text-xl">
                    <a href="">Menu</a>
                </li>
                <li className="text-white text-xl">
                    <a href="">Contact Us</a>
                </li>
            </ul>

            <div className="hidden md:block">
                <i className="text-white text-2xl bx bxl-facebook-square"></i>
                <i className="text-white text-2xl bx bxl-instagram-alt"></i>
            </div>

            <MenuMovil />
        </nav>
    )
}