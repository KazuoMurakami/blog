'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get('http://localhost:5000/api/data'); // Rota correta do seu servidor
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados do servidor:', error);
    }
  }

  return (
    <div>
      <h1>Seus Dados:</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id} className='flex flex-col'><span>{item.name}</span><span>{item.email}</span></li>
        ))}
      </ul>
    </div>
  );
}
