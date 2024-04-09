import "./styles.css"
import { useState, useEffect } from "react";

function formatTime(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let ms = milliseconds % 1000;

    return `${minutes}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
}

function ScoreTable() {

    const [scoreTable, setScoreTable] = useState('');

    const handleGetData = async () => {
      const response = await fetch('http://localhost:8080/parsejson');
      const data = await response.json();

      setScoreTable(data);
    }

    
  
    useEffect(() => {
      handleGetData();
    }, []);

  return (
    <div>
        <table>
            <thead>
            <tr>
                <th colSpan="3">Tabela de Pontuação</th>
            </tr>
            <tr>
                <th>Posição</th>
                <th>Piloto</th>
                <th>Melhor volta</th>
                <th>Pontos</th>
            </tr>
            </thead>
            <tbody>
                
            {scoreTable['race_result'] && scoreTable['race_result'].map((entry, index) => (
            <tr key={index}>
                <td>{entry.finish_position}</td>
                <td>{entry.display_name}</td>
                <td>{formatTime(entry.best_lap_time)}</td>
                <td>{entry.points}</td>
            </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export { ScoreTable } 