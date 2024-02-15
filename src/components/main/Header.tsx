import Image from "next/image";
import hero from "../../images/hero.jpg";

import { Nav } from "../general";

export const Header = () => {
    return (
        <header className="w-full h-screen relative">
            <Image
                src={hero}
                alt="Logo"
                fill
                priority
                className="object-cover object-center"
            />

            <div className="absolute inset-0 w-full h-full">
                <Nav />

                <div
                    className="w-full flex justify-center items-center flex-col gap-16"
                    style={{
                        height: "calc(100vh - 160px)"
                    }}
                >
                    <h1
                        className="text-6xl lg:text-7xl 2xl:text-8xl font-lora font-bold text-white w-3/4 lg:w-1/2 text-center"
                    >
                        Check out our gourmet <span className="text-amber-500">Menu</span>
                    </h1>

                    <div className="flex justify-center items-center gap-10">
                        <p className="text-white text-xl">
                            <i className="bx bxs-watch text-amber-500"></i>
                            <span> 9:00-20:00</span>
                        </p>

                        <p className="text-white text-xl">
                            <i className="bx bxs-map text-amber-500"></i>
                            <span> Politkovskaia 14</span>
                        </p>
                    </div>

                    <button
                        className="bg-white text-slate-700 lg:bg-transparent py-3 px-10 border border-white transition-all duration-300 lg:text-white lg:hover:bg-white/50"
                    >
                        Look Menu
                    </button>
                </div>
            </div>
        </header>
    )
}