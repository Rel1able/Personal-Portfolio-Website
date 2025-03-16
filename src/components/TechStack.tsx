type TechStackProps = {
    title: string;
}

type TechStackCardProps = {
    technology: string;
    img: string;
    description?: string;
}

export default function TechStack({title}:TechStackProps) {
    return (
        <div id="skills" className="text-center">
            <h2 className="text-3xl font-medium">{title}</h2>
            <ul className="flex flex-wrap justify-center gap-4 mt-8  w-[80%] m-auto">
                <TechStackCard technology={"JavaScript"}
                    img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"} />
                <TechStackCard technology={"HTML"}
                    img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"} />
                <TechStackCard technology={"CSS"}
                    img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"} />
                <TechStackCard technology={"ReactJS"}
                    img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"} />
                <TechStackCard technology={"TailwindCSS"}
                    img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"} />
                <TechStackCard technology={"TypeScript"}
                    img={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"}
                description="(Basics)"/>
                <TechStackCard technology="Express"
                    img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                description="(Basics)"/>
                <TechStackCard technology="PostgreSQL"
                    img="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                description="(Basics)"/>

                
            </ul>
        </div>
    )
}

function TechStackCard({technology, img, description}: TechStackCardProps) {
    return (
        <li className="border-2 p-4 border-gray-200 shadow-2xl rounded-2xl text-xl font-bold">
            <img className="object-contain w-24" src={img}/>
            <h3>{technology}</h3>
            <p className="text-gray-500 font-normal">{description}</p>
        </li>
        
    )
}