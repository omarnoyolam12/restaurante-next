import { FC } from "react";
import Image from "next/image";

import { MealElement } from "@/data/meal";

interface Props {
    meal: MealElement
}

export const CardFood: FC<Props> = ({ meal }) => {
    return (
        <article
        >
            <figure className="relative w-full h-72">
                <Image
                    src={meal.strMealThumb}
                    fill
                    alt={`Image ${meal.strMeal}`}
                    className="object-cover object-center"
                />
            </figure>
            <div className="py-5 px-2 bg-zinc-800 flex justify-between items-center gap-2">
                <div>
                    <p className="text-zinc-300 line-clamp-1 font-bold">
                        {meal.strMeal}
                    </p>

                    <p className="text-zinc-300">
                        <i className='bx bxs-watch'></i>
                        10 min
                    </p>
                </div>

                <p className="py-1 px-5 bg-amber-600 text-white">
                    $140
                </p>
            </div>
        </article>
    )
}