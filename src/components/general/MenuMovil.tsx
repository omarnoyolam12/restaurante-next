import { useState } from "react";

export const MenuMovil = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                className="relative md:hidden w-10 h-10 flex justify-center items-center rounded-full bg-white z-20"
                onClick={() => setIsOpen(!isOpen)}
            >
                {
                    isOpen ? (
                        <i className='bx bxs-x-circle text-zinc-700 text-4xl' ></i>
                    ) : (
                        <i className='bx bx-menu text-zinc-600 text-2xl'></i>
                    )
                }
            </button>

            <div
                className="w-full h-screen fixed inset-0 z-10 bg-white flex justify-center items-center flex-col gap-10 md:hidden transition-all duration-700"
                style={{
                    clipPath: isOpen ? "circle(141.2% at 100% 0)" : "circle(0.0% at 100% 0)"
                }}
            >
                <ul className="flex justify-center items-center gap-5 flex-col">
                    <li className="text-zinc-600 text-2xl">
                        <a href="">Home</a>
                    </li>
                    <li className="text-zinc-600 text-2xl">
                        <a href="">About Us</a>
                    </li>
                    <li className="text-zinc-600 text-2xl">
                        <a href="">Menu</a>
                    </li>
                    <li className="text-zinc-600 text-2xl">
                        <a href="">Contact Us</a>
                    </li>
                </ul>


                <div>
                    <i className="text-zinc-600 text-3xl bx bxl-facebook-square"></i>
                    <i className="text-zinc-600 text-3xl bx bxl-instagram-alt"></i>
                </div>
            </div>
        </>
    )
}