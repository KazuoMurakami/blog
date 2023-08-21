export default function About(){
    return (
        <main className="grid grid-cols-2 gap-60 items-center pr-40 pl-40 pt-20 pb-20 bg-gray-800">
            <div className="text-2xl text-white">
                <h1 className="text-5xl pb-4">About me</h1>
                <span>Currently pursuing the 3rd Semester in Systems Analysis and Development at São Judas University.
                    With a strong passion for front-end development, I am actively expanding my knowledge in technologies such as React, Tailwind CSS, and JavaScript. I believe in the power of                    continuous learning and strive to enhance my skills by exploring new technologies and taking on personal projects.</span>
            </div>
            <div>
                <img src="/images/avatar.jpg" alt="" className="rounded h-96 w-96"/>
            </div>
        </main>
    )
}