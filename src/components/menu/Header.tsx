import { Nav } from "../general";

export const Header = () => {
    return (
        <header className="w-full relative h-[620px] bg-menu bg-left bg-cover bg-no-repeat">
            <div className="container mx-auto absolute inset-0 w-full px-5">
                <Nav />

                <div className="mt-28">
                    <p className="text-amber-500 text-xl italic">Food Menu</p>
                    <h1 className="text-4xl md:text-7xl text-white font-lora">Our Popular <span className="block">Delicious Foods</span> </h1>
                    <p className="text-zinc-400 mt-10 text-base md:text-xl w-5/6 md:w-1/2">
                        Introducing our tantalizing food menu, filled with exquisite flavors and culnary delights to satisfy every palate
                    </p>
                </div>
            </div>
        </header>
    )
}