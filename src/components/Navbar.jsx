import Link from "next/link"
const Menu = [{
    content: "About",
    root: "/about"
},
{
    content: "Stacks",
    root: "/"
},
{
    content: "Projects",
    root: "/"
},
{
    content: "Contact",
    root: "/"
},
]
export default function navbar(){
    return (
        <nav className="flex gap-6 justify-center items-center text-xl space-x-5 tracking-widest p-4">
            {Menu.map((item) => {
                return (
                    <Link key="1" href={item.root} className="border-black border-b-4 hover:border-blue-400"><li>{item.content}</li></Link>
                )
            })}
            <a href="https://www.linkedin.com/in/octavio-murakami-4696561a3/" target="_blank"><img src="/images/linkedin.svg" alt="" height={60} width={60}/></a>
        </nav>
    )
}