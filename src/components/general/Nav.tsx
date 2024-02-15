import Image from "next/image";

import { MenuMovil } from ".";
import logo from "../../images/logo.png";

export const Nav = () => {
    return (
        <nav className="flex justify-between items-center container mx-auto px-3 mt-3">

            <Image
                src={logo}
                width={120}
                height={120}
                alt="Logo Restaurante"
            />

            <ul className="hidden md:flex justify-center items-center gap-5">
                <li className="text-white text-xl">
                    <a href="">Home</a>
                </li>
                <li className="text-white text-xl">
                    <a href="">About Us</a>
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