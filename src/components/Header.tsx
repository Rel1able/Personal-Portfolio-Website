import NavBar from "./NavBar.tsx";

type Header = {
    name: string
}


export default function Header({name}: Header) {
    return (
        <header className="flex 
            items-center text-center
            justify-around p-8 text-gray-900
              text-2xl font-bold">
            <div>
                <h1 className="text-3xl">{name}</h1>
            </div>
            <div>
                <NavBar/>
            </div>
        </header>
        
    )
}