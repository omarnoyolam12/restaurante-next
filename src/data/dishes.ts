import { StaticImageData } from "next/image";

import beef from "../images/beef.jpg";
import chicken from "../images/chicken.jpg";
import dessert from "../images/dessert.jpg";
import lamb from "../images/lamb.jpg";
import miscellaneous from "../images/miscellaneous.jpg";
import pasta from "../images/pasta.jpg";
import pork from "../images/pork.jpg";
import seafood from "../images/seafood.jpg";

interface Category {
    category: string;
    link: string;
    img: StaticImageData;
}

export const categories: Category[] = [
    {
        category: "Beef",
        link: "#",
        img: beef,
    },
    {
        category: "Chicken",
        link: "#",
        img: chicken,
    },
    {
        category: "Dessert",
        link: "#",
        img: dessert,
    },
    {
        category: "Lamb",
        link: "#",
        img: lamb,
    },
    {
        category: "Miscellaneous",
        link: "#",
        img: miscellaneous,
    },
    {
        category: "Pasta",
        link: "#",
        img: pasta,
    },
    {
        category: "Pork",
        link: "#",
        img: pork,
    },
    {
        category: "Seafood",
        link: "#",
        img: seafood,
    },
];