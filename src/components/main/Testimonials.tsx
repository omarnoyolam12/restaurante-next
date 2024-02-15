import { Carrusel } from "./Carrusel"

export const Testimonials = () => {
    return (
        <section className="mt-20 w-full h-[640px] bg-testimonial bg-cover bg-top">
            <div className="container px-5 mx-auto h-full">
                <div
                    className="w-full sm:w-2/3 lg:w-1/2 h-full flex justify-center items-start flex-col"
                >
                    <p className="text-amber-500 italic mb-3">Guessbook</p>
                    <p className="text-5xl text-white font-light">Clients Testimonials</p>
                    <div className="w-48 h-[1px] bg-amber-500 mt-3 mb-10"></div>

                    <Carrusel />
                </div>
            </div>
        </section>
    )
}