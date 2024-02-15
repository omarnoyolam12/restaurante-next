import Image from "next/image";

import { categories } from "@/data/dishes";

export const Menu = () => {
    return (
        <section className="mt-5 lg:mt-20 px-3 container mx-auto">

            <h3 className="text-4xl text-white text-center font-bold">Menu</h3>
            <p className="text-center text-zinc-400">
                Our menu is filled with a variety of categories to choose from.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
                {
                    categories.map((category) => (
                        <article
                            key={category.category}
                            className="rounded bg-zinc-800 w-full h-60 overflow-hidden group"
                        >
                            <a href="#" className="relative block h-full">
                                <Image
                                    src={category.img}
                                    fill
                                    alt=""
                                    className="object-cover object-center transition-all duration-300 group-hover:scale-105 z-10"
                                />

                                <div className="w-full h-full bg-black/80 flex justify-center items-center absolute top-0 left-0 z-20">
                                    <p className="text-white text-2xl font-lora">
                                        {category.category}
                                    </p>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}