"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer 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`,
  },
});
export default function Stack() {
const [repos, setRepos] = useState([]); // Estado para armazenar os repositórios
const [totalCommits, setTotalCommits] = useState(0);
  useEffect(() => {
    // Função para buscar os repositórios do GitHub
    async function fetchRepos() {
      try {
        const response = await githubApi.get('/users/KazuoMurakami/repos'); // Substitua 'user' pelo seu nome de usuário do GitHub
        setRepos(response.data); // Atualiza o estado com os repositórios
      } catch (error) {
        console.error('Erro ao buscar repositórios do GitHub', error);
      }
    }
    fetchRepos(); // Chama a função ao montar o componente
  }, []);

  useEffect(() => {
    async function fetchTotalCommits() {
      let total = 0;

      for (const repo of repos) {
        try {
          const response = await githubApi.get(`/repos/KazuoMurakami/${repo.name}/commits`);
          total += response.data.length;
        } catch (error) {
          console.error(`Erro ao buscar commits do repositório ${repo.name}`, error);
        }
      }

      setTotalCommits(total);
    }

    fetchTotalCommits();
  }, [repos]);
    
    const TotalRepo = repos.length;

    return  (
        <>
        <section className="flex flex-col py-20 BgSkill text-white font-bold  items-center">
            <h1 className="flex text-5xl justify-center pb-10">Stack Learning</h1>
            <ul className="text-2xl grid grid-cols-4 gap-20 w-full">
                {['React', 'NodeJs', 'JavaScript', 'HTML', 'CSS', 'SQL', 'NextJs', 'NextJs'].map((item, index) => (
    <li key={index} className="flex justify-center"><span>{item}</span></li>
  ))}
            </ul>      
        </section>
        <section className='BgSkill flex text-white justify-around p-10'>
        <div className='flex flex-col items-center border-y-slate-200 border-y-2 p-5'>
            <h2 className="text-5xl">{TotalRepo}+</h2>
            <span>Projects Github</span>
        </div>
        <div className='flex flex-col items-center border-y-slate-200 border-y-2 p-5'>
            <h2 className="text-5xl">{totalCommits}+</h2>
            <span>Commits Github</span>
        </div>
        <div className='flex flex-col items-center border-y-slate-200 border-y-2 p-5'>
            <h2 className="text-5xl">1+</h2>
            <span>Years programmation</span>
        </div>
        </section>
        </>
    )
};