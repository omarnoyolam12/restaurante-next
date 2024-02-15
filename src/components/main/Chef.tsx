import Image from "next/image";
import chef from "../../images/chef.jpg";

export const Chef = () => {
    return (
        <section className="container mx-auto mt-20 mb-14 md:mb-36">
            <div className="w-full md:relative px-3 md:px-10 grid grid-cols-1 md:block gap-10">
                <div
                    className="md:w-3/4 lg:w-2/3 h-full bg-amber-800/10 flex justify-center items-start flex-col px-5 md:px-10 lg:px-20 py-5 md:py-14 lg:py-28 2xl:py-40"
                >
                    <h3 className="text-white text-4xl md:text-5xl font-bold mb-10">
                        Head Chef
                    </h3>

                    <div className="md:w-1/2 lg:w-2/3 space-y-5">
                        <p className="text-white text-sm md:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptates in quaerat maiores. Deleniti fugit explicabo ab
                            quam minima dolor optio, libero quas inventore facilis nemo
                            dolorum nesciunt fuga aliquam vero saepe perferendis odit
                            iusto ullam cupiditate rem? Accusantium, officiis eum nihil
                            dolorem aut magni cupiditate sequi fuga consectetur cum.
                        </p>

                        <p className="text-white text-sm md:text-base">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Necessitatibus id, perspiciatis nihil odio tempora
                            praesentium, nesciunt sequi at est molestias sed, quas
                            voluptatem sapiente quos rerum dicta eius reprehenderit?
                            Distinctio reprehenderit alias, molestiae omnis tempore ut
                            quasi, optio in obcaecati qui sapiente perferendis aperiam
                            iusto reiciendis eligendi porro.
                        </p>
                    </div>
                </div>

                <div className="static md:absolute top-0 right-0 md:top-24 md:right-5 w-full md:w-1/2 h-96 md:h-full">
                    <div className="relative md:static w-full h-full md:h-auto">
                        <Image
                            src={chef}
                            fill
                            alt="Chef"
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}