"use client"; 
import { useState } from 'react';

export default function UserRankingInitial() {
  const [myRank, setMyRank] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addToMyRank = () => {
    if (input.trim()) {
      setMyRank([...myRank, input]);
      setInput("");
    }
  };

  return (
    <div>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Nome do anime..." 
        style={{ color: 'black' }} // Apenas para você conseguir enxergar o texto
      />
      <button onClick={addToMyRank}>Adicionar ao meu Ranking</button>

      <ol>
        {myRank.map((anime, index) => (
          <li key={index}>
            {anime} 
            <button onClick={() => setMyRank(myRank.filter((_, i) => i !== index))}>
              ❌
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}