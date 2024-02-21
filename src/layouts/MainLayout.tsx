import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Variants, motion, AnimatePresence } from "framer-motion";

import { Footer } from "@/components/general";

interface Props extends PropsWithChildren {
    title: string;
    description?: string;
}

export const MainLayout: FC<Props> = ({ title, description, children }) => {

    const router = useRouter();

    const variants: Variants = {
        hidden: { opacity: 0 },
        enter: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.5 } }
    };

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>


            <motion.div
                key={router.route}
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
            >
                {children}

                <Footer />
            </motion.div>
        </>
    )
}