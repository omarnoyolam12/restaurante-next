import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import { Footer } from "@/components/general";

interface Props extends PropsWithChildren {
    title: string;
    description?: string;
}

export const MainLayout: FC<Props> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>


            {children}

            <Footer />
        </>
    )
}