
export const Footer = () => {
    return (
        <footer
            className="mx-auto container px-5 grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-0 mt-20 pb-10 lg:pb-0 lg:h-[180px]"
        >
            <div
                className="text-zinc-300 row-start-1 row-end-2 lg:row-start-1 lg:row-end-1 col-span-1"
            >
                <h4 className="text-white text-3xl mb-10">Service Time</h4>

                <div className="flex justify-between items-center">
                    <p>Monday-Friday</p>
                    <p>8:00 - 20:30</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Saturday</p>
                    <p>10:00 - 18:30</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Sunday</p>
                    <p>10:00 - 18:30</p>
                </div>
            </div>

            <div
                className="flex justify-center items-center row-start-3 row-end-4 lg:row-start-1 lg:row-end-1 gap-5 flex-col col-span-1 lg:col-span-2 lg:px-5 2xl:px-20"
            >
                <p className="text-zinc-300 text-center text-sm">
                    This quaint city restaurant boasts a warm, inviting ambiance and a
                    diverse menu featuring locally-sourced ingredients and
                    globally-inspired dishes. Impeccable service ensures a delightful
                    dining experience for every guest.
                </p>

                <ul className="flex justify-center items-center gap-5">
                    <li
                        className="w-8 h-8 rounded-full flex justify-center items-center border border-white bg-zinc-800"
                    >
                        <a href="#">
                            <i className="bx bxl-facebook text-white"></i>
                        </a>
                    </li>
                    <li
                        className="w-8 h-8 rounded-full flex justify-center items-center border border-white bg-zinc-800"
                    >
                        <a href="#">
                            <i className="bx bxl-instagram text-white"></i>
                        </a>
                    </li>
                    <li
                        className="w-8 h-8 rounded-full flex justify-center items-center border border-white bg-zinc-800"
                    >
                        <a href="#">
                            <i className="bx bxl-twitter text-white"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col-span-1 row-start-2 row-end-3 lg:row-start-1 lg:row-end-1">
                <h4 className="text-white text-3xl mb-5">Suscribe</h4>

                <p className="text-zinc-300 mb-3">Get Latest Updates and Offers</p>

                <div className="relative">
                    <input
                        type="text"
                        className="w-full px-5 py-2 rounded-md"
                        placeholder="Email"
                    />
                    <button
                        className="w-8 h-8 rounded-md bg-amber-500 absolute top-1 right-2"
                    >
                        <i className="bx bx-navigation text-white"></i>
                    </button>
                </div>
            </div>
        </footer>

    )
}