import Image from "next/image";
import gallery from "../../images/gallery.jpg";

import { Nav } from "../general";

export const Header = () => {
    return (
        <header className="w-full h-screen relative">
            <Image
                src={gallery}
                alt="Logo"
                fill
                priority
                className="object-cover object-center"
            />

            <div className="absolute inset-0 w-full h-full">
                <Nav />

                <div
                    className="w-full flex justify-center items-end flex-col gap-16 mx-auto container"
                    style={{
                        height: "calc(100vh - 160px)"
                    }}
                >
                    <div className="md:w-3/4 lg:w-1/2 px-5 md:px-0">
                        <h1 className="text-6xl md:text-8xl text-white font-bold mb-14 font-lora">
                            Savor the <span className="text-amber-500">Experience</span>
                        </h1>

                        <p className="text-white text-xl">
                            Our photo gallery showcases the vibrant atmosphere, mouth-watering dishes, and the unforgettable moments that make our restaurant truly special.
                        </p>


                    </div>
                </div>
            </div>
        </header>
    )
}