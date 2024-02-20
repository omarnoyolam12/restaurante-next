import Image from "next/image";
import Masonry from 'react-masonry-css'

import { photos } from "@/data/gallery";

export const GallerySection = () => {



    return (
        <section className="container mx-auto px-5 mt-10 lg:mt-20">

            <h2 className="text-center mb-10 md:mb-20 text-zinc-300 text-5xl">
                Gallery
            </h2>

            <Masonry
                breakpointCols={{
                    default: 3,
                    1024: 2,
                    640: 1
                }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {photos.map((photo, index) => (
                    <Image
                        key={index}
                        src={photo}
                        alt="photos"
                    />
                ))}
            </Masonry>

        </section>
    )
}