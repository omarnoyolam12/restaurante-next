import Image from "next/image";

import fiesta1 from "../../images/fiesta1.jpg";
import fiesta2 from "../../images/fiesta2.jpg";

export const Party = () => {
    return (
        <section className="mt-5 lg:mt-40 bg-zinc-800/20">
            <div
                className="container mx-auto flex justify-start items-start flex-col-reverse md:grid md:grid-cols-2 gap-10 lg:gap-32 py-10 md:py-20"
            >
                <div className="relative px-5 md:px-0 w-full h-[420px] lg:h-[680px]">
                    <Image
                        src={fiesta1}
                        alt="fiesta 1"
                        className="static md:absolute top-0 left-5 w-full h-full md:w-2/3 md:h-2/3 lg:h-5/6 object-cover object-center border border-white"
                    />

                    <Image
                        src={fiesta2}
                        alt="fiesta 2"
                        className="hidden md:block absolute bottom-0 right-0 w-2/3 h-1/2 object-cover object-center border border-white"
                    />
                </div>

                <div
                    className="flex justify-center items-start flex-col px-5 md:px-0 h-full"
                >
                    <p className="text-amber-500 font-lora italic text-xl">
                        Party or Events
                    </p>

                    <h3 className="text-4xl lg:text-5xl text-white font-bold my-3">
                        Do you hace any plan for any Party or Events?
                    </h3>

                    <p className="text-lora italic text-zinc-400">
                        Our Special Dish Of The Party or Events
                    </p>

                    <ul className="mt-10 ml-6 space-y-3">
                        <li className="list-image-checkmark text-zinc-300">
                            Turmeric coconunt rice, chicken safe with peanut sauce
                        </li>
                        <li className="list-image-checkmark text-zinc-300">
                            Indonesian Fried Rice, Choice of Chicken, Beef Stack
                        </li>
                        <li className="list-image-checkmark text-zinc-300">
                            Wok-fry thin rice noodles, Rice, noodles, chichen
                        </li>
                    </ul>

                    <button
                        className="px-5 py-3 border border-white text-white mt-10 transition-all duration-300 hover:bg-amber-600/20"
                    >
                        Booking Now
                    </button>
                </div>
            </div>
        </section>
    )
}