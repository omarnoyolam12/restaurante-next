import { FC } from 'react';

interface Props {
    icon: string;
    title: string;
    text: string;
}

export const Details: FC<Props> = ({ icon, text, title }) => {
    return (
        <div className="flex justify-start items-center gap-3 md:gap-10">
            <div
                className="w-16 h-16 flex justify-center items-center rounded-full bg-zinc-800 shadow-lg"
            >
                <i className={`${icon} text-4xl text-zinc-600`} />
            </div>

            <div className="space-y-2 flex-1">
                <p className="text-white text-xl font-bold">{title}</p>

                <p className="text-zinc-400">
                    {text}
                </p>
            </div>
        </div>
    );
}