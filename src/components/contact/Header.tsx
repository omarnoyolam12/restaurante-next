import React from 'react';
import Image from 'next/image';

import { Nav } from '../general';
import contact from "../../images/contact.jpg";

export const Header = () => {
    return (
        <header className='container mx-auto px-5'>
            <Nav />

            <div
                className='grid grid-cols-1 md:grid-cols-2 gap-20 mt-10'
            >
                <div className='flex justify-center items-start flex-col lg:py-20 xl:py-28 2xl:py-36'>
                    <p className='font-lora text-amber-500 text-xl'>
                        Our Location
                    </p>
                    <h1 className='text-4xl lg:text-7xl text-white mb-5'>VISIT OUR RESTAURANT</h1>

                    <p className='text-zinc-300 text-xl'>We thinks of our clients as guests we´ve invited to a party, and we´re the host</p>

                    <div className='mt-10 md:mt-20'>
                        <p className='text-zinc-300'>
                            Address: 2715 Ash Dr. San Jose, South Dakota 83475
                        </p>

                        <p className='text-zinc-300'>
                            Email: restaurant@example.com
                        </p>

                        <p className='text-zinc-300'>
                            Phone: (219) 555-0114
                        </p>
                    </div>
                </div>

                <figure className='relative hidden md:block'>
                    <Image
                        src={contact}
                        fill
                        alt='Contact'
                        priority
                        className='object-cover object-center'
                    />
                </figure>
            </div>
        </header>
    )
}