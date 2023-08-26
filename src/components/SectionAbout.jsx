"use client";

import { useState } from 'react';
const translate = {
  english: {
    heading: 'About me',
    content: 'Currently pursuing the 3rd Semester in Systems Analysis and Development at São Judas University. With a strong passion for front-end development, I am actively expanding my knowledge in technologies such as React, Tailwind CSS, and JavaScript. I believe in the power of continuous learning and strive to enhance my skills by exploring new technologies and taking on personal projects.'
  },
  portuguese: {
    heading: 'Sobre mim',
    content: 'Atualmente cursando o 3º semestre de Análise e Desenvolvimento de Sistemas na Universidade São Judas. Com uma forte paixão pelo desenvolvimento front-end, estou expandindo ativamente meu conhecimento em tecnologias como React, Tailwind CSS e JavaScript. Acredito no poder da aprendizagem contínua e me esforço para aprimorar minhas habilidades explorando novas tecnologias e realizando projetos pessoais.'
  }
};

export default function About(){
    const [language, setLanguage] = useState("english")

    const toggleLanguage =  () => {
        setLanguage(prevLanguage => prevLanguage === "english" ? "portuguese" : "english")
    }
    return (
        <main className="grid grid-cols-2 gap-60 items-center p-40 bg-gray-800 flex-grow">
            <div className="text-2xl text-white flex flex-col">
                <h1 className="text-5xl border-b-4 w-44 mb-4 border-blue-400">{translate[language].heading}</h1>
                <span className="text-2xl mb-4">{translate[language].content}</span>
                <button className="w-40 bg-black rounded-md" onClick={toggleLanguage}>Translate</button>
            </div>
            <div className="rounded h-full">
                <img src="/images/avatar.jpg" alt="" className="rounded h-full"/>
            </div>
        </main>
    )
}