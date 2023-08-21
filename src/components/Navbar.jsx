
const Menu = ["About","Stacks","Projects","Contact"]
export default function navbar(){
    return (
        <nav className="flex gap-6 justify-center items-center text-xl space-x-5 tracking-widest p-4 border-gray-800 border-b-2">
            {Menu.map((item) => {
                return (
                    <a href="" className="relative border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"><li>{item}</li></a>
                )
            })}
            <a href="https://www.linkedin.com/in/octavio-murakami-4696561a3/" target="_blank"><img src="/images/linkedin.svg" alt="" height={60} width={60}/></a>
        </nav>
    )
}