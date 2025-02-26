export default function NavBar() {
    return (
        <nav>
            <ul className="flex font-medium gap-2.5 text-gray-900 lg:gap-8 xl:text-3xl">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact me</a></li>
            </ul>
        </nav>
    )
}