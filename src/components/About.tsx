type AboutProps = {
    description: string;
}

export default function About({description}: AboutProps) {
    return (
        <h2 className="text-center flex justify-center items-center gap-8 p-4 text-2xl font-bold">
            <img className="object-contain h-[30rem]
             rounded-[50%]" src="24.jpg" alt="picture of me" />
            <p className="font-medium
                m-4 bg-emerald-600
                text-white px-8
                py-4 rounded-xl">
                {description}
            </p>
        </h2>

    )
}