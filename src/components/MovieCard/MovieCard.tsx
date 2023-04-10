import { FC } from "react";

interface MovieCardProps {
    title: string,
    body: string
}

const MovieCard: FC<MovieCardProps> = (props) => {
    const { title, body } = props
    return (
        <div className="max-w-sm bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-200 hover:-translate-y-4 duration-200 hover:animation-pulse">
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
                    {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {body.slice(0, 300)}
                </p>

            </div>
        </div>
    )
};

export default MovieCard;