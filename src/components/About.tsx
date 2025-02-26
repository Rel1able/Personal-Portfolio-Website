type AboutProps = {
    description: string;
}

export default function About({description}: AboutProps) {
    return (
        <h2 id="about" className="text-center flex flex-col justify-center
         items-center gap-8 p-4 text-xs font-bold xl:flex-row w-[70%] m-auto">
            <img className="object-contain
             rounded-[50%] w-48 xl:w-72" src="24.jpg" alt="picture of me" />
            <p className="font-medium
                m-4 bg-gray-900
                text-white px-8
                py-4 rounded-xl sm:text-sm lg:text-xl xl:text-2xl">
                {description}
            </p>
        </h2>

    )
}