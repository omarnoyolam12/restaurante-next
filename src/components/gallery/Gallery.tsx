import Image from "next/image";
import Masonry from "react-layout-masonry";

import { photos } from "@/data/gallery";

export const GallerySection = () => {
    return (
        <section className="container mx-auto px-5 mt-10 lg:mt-20">

            <h2 className="text-center mb-10 md:mb-20 text-zinc-300 text-5xl">
                Gallery
            </h2>

            <Masonry columns={{ 340: 1, 740: 2, 992: 3 }} gap={20}>
                {
                    photos.map((photo, index) => (
                        <Image
                            key={index}
                            src={photo}
                            alt="nuevo"
                        />
                    ))
                }

            </Masonry>
        </section>
    )
}