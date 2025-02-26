import NavBar from "./NavBar.tsx";

type Header = {
    name: string
}


export default function Header({name}: Header) {
    return (
        <header className="flex 
            items-center text-center
            justify-around p-8 text-gray-900
              text-xs font-bold sm:text-sm lg:text-xl gap-2">
            <div>
                <h1 className="text-xs sm:text-lg lg:text-2xl xl:text-3xl">{name}</h1>
            </div>
            <div>
                <NavBar/>
            </div>
        </header>
        
    )
}