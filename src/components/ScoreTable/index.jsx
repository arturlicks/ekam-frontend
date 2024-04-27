import "./styles.css"
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

// 816639 = 1:21.663 481808 = 48.180
function formatTime(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 10000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let ms = milliseconds % 1000;

    return `${minutes}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;
}

function ScoreTable() {

    const [scoreTable, setScoreTable] = useState('');

    const handleGetData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const date = urlParams.get('date');
      const response = await fetch(`http://localhost:8080/racedata?date=${date}`);
      const data = await response.json();
      setScoreTable(data);
    }

    
  
    useEffect(() => {
      handleGetData();
    }, []);

  return (
    <Container>
        <Table hover>
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
                
            {scoreTable&& scoreTable.map((entry, index) => (
            <tr key={index}>
                <td>{entry.finish_position}</td>
                <td>{entry.display_name}</td>
                <td>{formatTime(entry.best_lap_time)}</td>
                <td>{entry.points}</td>
            </tr>
            ))}
            </tbody>
        </Table>
    </Container>
  )
}

export { ScoreTable } 