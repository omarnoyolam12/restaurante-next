import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import { CardFood } from ".";
import { categories } from "@/data/dishes";
import { Meal, MealElement } from '../../data/meal';

export const ListDishes = () => {

    const router = useRouter();

    const [categorySelected, setCategorySelected] = useState<string>('');
    const [meals, setMeals] = useState<MealElement[]>([]);

    // *Obtener los platillos por url--------------------
    useEffect(() => {

        const getRoute = async () => {

            const { cat } = router.query as { cat: string }
            let category: string;

            if (cat) {
                setCategorySelected(cat);
                category = cat;
            }
            else {
                setCategorySelected(categories[0].category);
                category = categories[0].category
            }

            await getDishes(category);
        }

        getRoute();

    }, [router.query.cat]);

    // *Seleccionar la categoria-------------------------
    const selectCategory = async (category: string) => {
        setCategorySelected(category);
        await getDishes(category);
    }

    // *Pedir los platillos------------------------------
    const getDishes = async (category: string) => {

        const { data } = await axios.get<Meal>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);

        setMeals(data.meals);
    }

    return (
        <section className="container mx-auto px-5 mt-5 md:mt-20 grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className="col-span-1">
                <div className="md:hidden">
                    <select
                        name="categories"
                        id="categories"
                        className="w-full px-3 py-2"
                        onChange={e => getDishes(e.target.value)}
                    >
                        {
                            categories.map(category => (
                                <option
                                    key={category.category}
                                    value={category.category}
                                >
                                    {category.category}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="sticky top-10 left-0 hidden md:block">
                    <p className="text-white text-xl border-b border-zinc-600 pb-2">Categories</p>

                    <div className="mt-5">
                        {
                            categories.map(category => (
                                <button
                                    key={category.category}
                                    className={`block p-2 transition-all duration-300  w-full text-left ${categorySelected === category.category ? 'text-white bg-amber-600' : 'text-zinc-600 hover:bg-zinc-800 hover:text-zinc-200'}`}
                                    onClick={() => selectCategory(category.category)}
                                >
                                    {category.category}
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="gap-5 col-span-1 md:col-span-4 grid" style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(250px,1fr)"
            }}>
                {
                    meals.map(meal => (
                        <CardFood
                            key={meal.strMeal}
                            meal={meal}
                        />
                    )
                    )}
            </div>
        </section>
    )
}