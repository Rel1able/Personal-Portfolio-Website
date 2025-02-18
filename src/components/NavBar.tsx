export default function NavBar() {
    return (
        <nav>
            <ul className="flex font-medium gap-8 text-gray-900 ">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact me</a></li>
            </ul>
        </nav>
    )
}