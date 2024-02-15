import Image from "next/image";

import { Details } from ".";
import service from "../../images/service.jpg";

const details = [
    {
        icon: "bx bxs-bowl-hot",
        title: "Grill Mastery",
        text: "Our expert grill transform premium cuts of meet into succulent masterpieces."
    },
    {
        icon: "bx bxs-dish",
        title: "Seafood Sensations",
        text: "Dive into a world of oceanic delight with our Seadood Sensations Service."
    },
    {
        icon: "bx bxs-baguette",
        title: "Custom Grilled Creations",
        text: "Choose your favorite ingredients, and our chefs, will grill them to perfection."
    }
];

export const Choose = () => {
    return (
        <section
            className="p-5 mt-10 lg:mt-20 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20 h-auto"
        >
            <figure className="w-full h-full relative hidden md:block">
                <Image
                    src={service}
                    fill
                    className="object-cover object-bottom shadow-lg"
                    alt="Service"
                />
            </figure>

            <div className="md:py-10">
                <p className="font-light font italic text-amber-400 text-2xl">
                    What We Serve
                </p>
                <h3 className="text-3xl lg:text-5xl text-white font-bold mt-3">
                    We provide a complete dining experience
                </h3>

                <div className="space-y-10 mt-10">
                    {
                        details.map(detail => (
                            <Details
                                key={detail.title}
                                icon={detail.icon}
                                text={detail.text}
                                title={detail.title}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}