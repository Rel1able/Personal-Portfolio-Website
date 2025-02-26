
type ProjectCardProps = {
    title: string;
    description: string;
    img: string;
    link: string;
    sourceCode: string;
}

export default function Projects() {
    return (
        <div id="projects" className="text-center mt-8">
            <div>
                <h1 className="text-3xl font-medium lg:text-4xl">Projects</h1>
                <span className="text-gray-500 lg:text-2xl">(Click on the image to see it live)</span>
            </div>
            

            <ul className="mt-8  flex justify-center flex-wrap">
                <ProjectCard sourceCode="https://github.com/Rel1able/Shopping-Cart" link="https://shopping-cart47.netlify.app/" title="Shopping Cart" description="Projects that imitate online store on client side. Data about products is retrieved from Fake API. The project is created using React, ReactRouter and CSS." img="shopping-cart.png"/>
                <ProjectCard sourceCode="https://github.com/Rel1able/Memory-Card" link="https://bleach-memory-card.netlify.app/" title="Bleach Memory Card" description="Memory card with characters from the anime Bleach. Don't click on the same card twice and complete all difficulty levels. Created with React and CSS." img="memory-card.png"/>
                <ProjectCard sourceCode="https://github.com/Rel1able/CV-Application" link="https://cv-builder-app4.netlify.app/" title="CV Builder" description="CV Builder, built with ReactJS and CSS." img="cv-builder.png"/>
                <ProjectCard sourceCode="https://rel1able.github.io/Battleship/" link="https://rel1able.github.io/Battleship/" title="Battleship" description="A classic Battleship game against the computer built with HTML CSS and JS" img="battleship.png" />
                <ProjectCard sourceCode="https://rel1able.github.io/Weather-App/" link="https://rel1able.github.io/Weather-App/" title="Weather App" description="Get data about the weather in any place in the world. Project was built using HTML, CSS and JS" img="weather-app.png" />
                <ProjectCard sourceCode="https://github.com/Rel1able/Todo-list" link="https://rel1able.github.io/Todo-list/" title="Todo-list" description="Create, edit, delete and read tasks with TodoList. Tasks are stored using local storage, so you will not lose access to them after reloading the page." img="todo-list.png"/>
            </ul>
        </div>
        
    )
}


function ProjectCard({title, description,img, link, sourceCode}: ProjectCardProps) {
    return (
        <li className="flex flex-col justify-center items-center mb-32">
            <div className="text-center flex flex-col lg:grid grid-cols-2">
                <div className="lg:flex justify-center items-center flex-col">
                    <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl">{title}</h1>
                    <p className="text-xs mb-6 w-72 m-auto mt-2 sm:text-sm lg:text-lg xl:text-2xl" >{description}</p>
                </div>
                <div className="mr-4">
                    <div className="border-2 border-gray-100 shadow-2xl">
                    <a href={link}>
                        <img className="hover:scale-105
                    cursor-pointer rounded-2xl
                    duration-300 transition-all
                    object-contain lg:w-[40rem]" src={img} />
                    </a>
                </div>
                <a className="mt-6 text-xs lg:text-lg xl:text-xl" href={sourceCode}>
                    <img className="w-6 m-auto mt-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                    <span className="mt-6 text-gray-500">(Click on the icon to see the source code)</span>
                </a>
                </div>
                
            </div>
            
        </li>
    )
}

