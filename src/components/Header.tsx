import NavBar from "./NavBar.tsx";

type Header = {
    name: string
}


export default function Header({name}: Header) {
    return (
        <header className="flex items-center text-center justify-around p-8 bg-purple-700 text-white text-2xl font-bold">
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <NavBar/>
            </div>
        </header>
        
    )
}