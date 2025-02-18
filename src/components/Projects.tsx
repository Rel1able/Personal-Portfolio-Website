
type ProjectCardProps = {
    title: string;
    description: string;
    img: string;
}

export default function Projects() {
    return (
        <div className="text-center mt-8">
            <h1 className="text-3xl font-bold">Projects</h1>
            <ul className="mt-8  flex justify-center flex-wrap">
                <ProjectCard title="Shopping Cart" description="E-Commerce Website" img="shopping-cart.png"/>
            </ul>
        </div>
        
    )
}

function ProjectCard({title, description,img}: ProjectCardProps) {
    return (
        <li className="w-128 flex flex-col gap-2
         justify-center items-center
          shadow-2xl border-gray-300 border-2 rounded-2xl py-6">
            <h3>{title}</h3>
            <img className="object-contain w-96" src={img} />   
            <div className="flex flex-center items-center gap-2">
                <p>{description}</p>
                <img className="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                <img className="w-8" src="open-in-new.svg"/>
            </div>
            
        </li>
    )
}