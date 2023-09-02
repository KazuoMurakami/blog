"use client";

import { useState } from 'react';
const translate = {
  english: {
    heading: 'Hello, I am Octavio Kazuo',
    content: 'Currently pursuing the 3rd Semester in Systems Analysis and Development at São Judas University. With a strong passion for front-end development, I am actively expanding my knowledge in technologies such as React, Tailwind CSS, and JavaScript. I believe in the power of continuous learning and strive to enhance my skills by exploring new technologies and taking on personal projects.',
    idiom:"EN-US"
  },
  portuguese: {
    heading: 'Olá, eu sou o Octavio Kazuo',
    content: 'Atualmente cursando o 3º semestre de Análise e Desenvolvimento de Sistemas na Universidade São Judas. Com uma forte paixão pelo desenvolvimento front-end, estou expandindo ativamente meu conhecimento em tecnologias como React, Tailwind CSS e JavaScript. Acredito no poder da aprendizagem contínua e me esforço para aprimorar minhas habilidades explorando novas tecnologias e realizando projetos pessoais.',
    idiom:"PT-BR"
  }
};

export default function About(){
    const [language, setLanguage] = useState("english")

    const toggleLanguage =  () => {
        setLanguage(prevLanguage => prevLanguage === "english" ? "portuguese" : "english")
    }
    return (
        <main className="flex gap-16 items-center justify-center p-40 flex-grow max-lg:flex-col-reverse SectionAbout m-8">
            <div className="text-2xl text-black flex flex-col w-96 flex-1 font-bold">
                <h1 className="text-5xl border-b-4 w-96 mb-4 border-blue-400">{translate[language].heading}</h1>
                <span className="text-2xl mb-4">{translate[language].content}</span>
                <button className="w-40 bg-white p-2 text-black drop-shadow-md hover:drop-shadow-2xl" onClick={toggleLanguage}>{translate[language].idiom}</button>
            </div>
            <div className="rounded w-96 h-full flex-1">
                <img src="/images/avatar.jpg" alt="" className="rounded h-full"/>
            </div>
        </main>
    )
}