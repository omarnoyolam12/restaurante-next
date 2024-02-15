import React from 'react'

export const Numbers = () => {
    return (
        <section className="p-5 bg-zinc-800/20 mt-5 lg:mt-20">
            <div
                className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0 py-10"
            >
                <div
                    className="flex justify-center items-center flex-col md:border-r md:border-amber-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-mood-smile mb-3"
                        width="64"
                        height="54"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#f59e0b"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                        <path d="M9 10l.01 0"></path>
                        <path d="M15 10l.01 0"></path>
                        <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
                    </svg>
                    <p className="font-lora text-4xl text-amber-500">5000+</p>
                    <p className="text-zinc-200 text-xl">Happy Customers</p>
                </div>

                <div
                    className="flex justify-center items-center flex-col md:border-r md:border-amber-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-chef-hat mb-3"
                        width="64"
                        height="54"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#f59e0b"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z"
                        ></path>
                        <path d="M6.161 17.009l11.839 -.009"></path>
                    </svg>
                    <p className="font-lora text-4xl text-amber-500">20+</p>
                    <p className="text-zinc-200 text-xl">Profesional Chefs</p>
                </div>

                <div
                    className="flex justify-center items-center flex-col md:border-r md:border-amber-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-bowl mb-3"
                        width="64"
                        height="54"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#f59e0b"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M4 8h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z"
                        ></path>
                    </svg>
                    <p className="font-lora text-4xl text-amber-500">100+</p>
                    <p className="text-zinc-200 text-xl">Popular Dishes</p>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-stars mb-3"
                        width="64"
                        height="54"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#f59e0b"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M17.8 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"
                        ></path>
                        <path
                            d="M6.2 19.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"
                        ></path>
                        <path
                            d="M12 9.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"
                        ></path>
                    </svg>
                    <p className="font-lora text-4xl text-amber-500">4.9</p>
                    <p className="text-zinc-200 text-xl">Customer Rating</p>
                </div>
            </div>
        </section>

    )
}